const User = require('./user.model');
const bcrypt = require('bcrypt');
const passport = require('passport');

const ensureLogin = (error = 'Not authorized') => (req, res, next) => {
  return req.isAuthenticated() ? next() : res.status(403).json({
    message: error
  })
}

const signup = (req, res, next) => {
  const {
    username,
    email,
    password
  } = req.body;

  if (!username || !password || !email) {
    res.status(400).json({
      message: 'Provide username and password'
    });
  }
  else{
    User.findOne({username})
      .exec()
      .then(user => {
        if(user){
          res.status(400).send({
            message: 'The user already exist in the database'
          })
          return;
        }
      })

      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      let userInfo = Object.assign({}, req.body, {password: hashPass});

      const user = new User(userInfo);
      user.save()
        .then( newUser =>{
          req.login(newUser, err =>{
            if(err){
              res.status(400).json({
                message: 'Error loging a new user'
              });
              return;
            }
            res.status(201).json({
              message: 'User created succesfully',
              user: req.user
            })
          })
        })
        .catch( err =>{
          res.status(400).json({
            message: 'Something went wrong saving a new user'
          })
        })
  }
}

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, errDetails) => {
    if (err) {
      res.status(500).json({
        message: 'Something went wrong while autenticating',
        err
      });
      return;
    }

    if (!user) {
      res.status(401).json({
        message: 'Cant found user in the dbs',
        errDetails
      });
      return;
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Something went wrong'
        });
        return;
      }
      res.status(200).json({
        message: 'Succesfully logged in',
        user: req.user
      });
    });
  })(req, res, next);
}

const facebookAuth = passport.authenticate("facebook");
const facebookCallback = passport.authenticate("facebook", {
  successRedirect: '/',
  failureRedirect: '/'
})

const logout = ( req, res, next ) => {
  req.logout();
  res.status(200).json({
    message: 'Successfully logged out'
  });
}

const getuser = ( req, res, next ) => {
  res.status(200).json({
    message: 'Request for the current logged user',
    user: req.user
  });
}

module.exports = {
  ensureLogin,
  signup,
  login,
  facebookAuth,
  facebookCallback,
  logout,
  getuser
}
