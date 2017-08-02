const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FbStrategy = require('passport-facebook').Strategy;
const bcrypt = require("bcrypt");
const User = require('../api/user/user.model');
const dotenv = require ("dotenv").load();

module.exports = ( app ) => {
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({
      "_id": id
    }, (err, user) => {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });

  passport.use('local', new LocalStrategy((username, password, next) => {
    console.log('username', username, 'password', password);
    User.findOne({username})
      .exec()
      .then( user =>{
        if (!user) {
          return next(null, false, {
            message: "Nombre de usuario incorrecto"
          });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return next(null, false, {
            message: "Contraseña incorrecta"
          });
        }
        return next(null, user);
      })
      .catch( err=> next(err))
  }));

  passport.use(new FbStrategy({
    clientID:process.env.FACEBOOK_CLIENT_ID,
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: '/user/facebook/callback'
  }, (accessToken, refreshToken, profile, next)=> {
    User.findOne({facebookId: profile.id}, (err, user)=>{
      if(err){
        // return next(err);
        res.status(400).json({
          message: 'Something went wrong',
          err
        })
      }
      if(user){
        console.log(profile);
        // return next(null, user);
        res.status(200).json({
          message: 'The user already exists',
          user
        })
      }

      const newUser = new User({
        name: profile.displayName,
        facebookID: profile.id
      });

      newUser.save()
        .then(user=>res.status(201).json({
          message: 'Created a new user',
          user
        }))
        .catch((err)=>next(err));
    })
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use((req, res, next)=>{
    res.locals.user = req.user;
    next();
  })
};
