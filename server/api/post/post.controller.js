const Post = require('./post.model');

const retrieveAll = () => Post.find()
  .populate({
    path: 'wishId',
    populate: [{
      path: 'editionId',
      populate: {
        path: 'productId',
        populate: {
          path: 'brandId'
        }
      }
    },{
      path: 'userId'
    }]
  }).exec()

const getAll = (req, res, next) =>{
  retrieveAll()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: 'Request all posts',
        posts
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}

const getByWish = (req, res, next) => {
  Post.find({ wishId : req.params.id})
    .exec()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all posts for the wish ${req.params.id}`,
        posts
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}

const getByProduct = (req, res, next) => {
  retrieveAll()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all posts for the product ${req.params.id}`,
        posts: posts.filter(elm => {
          return elm.wishId.editionId.productId._id.toString() === req.params.id
        })
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}
const getByUser = (req, res, next) => {
  retrieveAll()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all posts for the product ${req.params.id}`,
        posts: posts.filter(elm => {
          return elm.wishId.userId._id.toString() === req.params.id
        })
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}

const getByEdition = (req, res, next) => {
  retrieveAll()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all posts for the product ${req.params.id}`,
        posts: posts.filter(elm => {
          return elm.wishId.editionId._id.toString() === req.params.id
        })
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}

const getByBrand = (req, res, next) => {
  retrieveAll()
    .then(posts=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all posts for the product ${req.params.id}`,
        posts: posts.filter(elm => {
          return elm.wishId.editionId.productId.brandId._id.toString() === req.params.id
        })
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting posts',
      err
    }));
}

const getOne = (req, res, next) =>{
  Post.findById( req.params.id)
    .populate({
      path: 'wishId',
      populate: [{
        path: 'editionId',
        populate: {
          path: 'productId',
          populate: {
            path: 'brandId'
          }
        }
      },{
        path: 'userId'
      }]
    })
    .exec()
    .then(post=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request a post with id ${req.params.id}`,
        post
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting post',
      err
    }));
}

const create = (req, res, next) =>{
  const { wishId, comment, photoURI } = req.body;
  console.log(req.body);

  if( !wishId || !comment || !photoURI ){
    return res.json({
      user: req.user || 'not loged',
      message: 'Fulfill wishId/comment/photoURI',
      wishId,
      comment,
      photoURI
    })
  }

  console.log('reached here');
  const post = new Post(req.body);
  post
  .save()
  .then(
    post => res.json({
      user: req.user || 'not loged',
      message: `Create a post with parameters ${JSON.stringify(req.body)}`,
      post: post
    })
  )
  .catch(err=>res.json({
    user: req.user || 'not loged',
    message: 'Error saving post',
    err
  }));

}

const edit = (req, res, next) =>{
  Post.findById (req.params.id)
    .exec()
    .then( post => {
        post = Object.assign(post, req.body);
        post.save()
          .then( modifiedEdition =>{
            res.status(201).json({
              user: req.user || 'not loged',
              message: `Edit a post with id parameters ${req.params.id}`,
              post: modifiedEdition
            })
          });
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying post',
      err
    }));
}

const remove = (req, res, next) =>{
  Post.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Delete a post with id ${req.params.id}`
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying post',
      err
    }));
}

module.exports = {
  getAll,
  getByUser,
  getByWish,
  getByProduct,
  getByBrand,
  getByEdition,
  getOne,
  create,
  edit,
  remove
}
