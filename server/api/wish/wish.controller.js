const Wish = require('./wish.model');

const getAll = (req, res, next) =>{
  Wish.find()
    .populate('userId')
    .populate({
      path: 'editionId',
      populate: {
        path: 'productId',
        populate: {
          path: 'brandId'
        }
      }
    })
    .exec()
    .then(wishes=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: 'Request all wishes',
        wishes
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting wishes',
      err
    }));
}

const getByUser = (req, res, next) => {
  Wish.find({ userId : req.params.id})
    .exec()
    .then(wishes=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all wishes of the brand ${wishes[0].productId.name}`,
        wishes
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting wishes',
      err
    }));
}

const getOne = (req, res, next) =>{
  Wish.findById( req.params.id)
    .populate('userId')
    .populate({
      path: 'editionId',
      populate: {
        path: 'productId',
        populate: {
          path: 'brandId'
        }
      }
    })
    .exec()
    .then(wish=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request a wish with id ${req.params.id}`,
        wish
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting wish',
      err
    }));
}

const create = (req, res, next) =>{
  const { editionId, userId} = req.body;
  if( !editionId || !userId ){
    res.status(400).json({
      user: req.user || 'not loged',
      message: 'Fulfill editionId/userId'
    })
  }
  else{
    const wish = new Wish(req.body);
    wish
      .save()
      .then(
        wish => res.status(201).json({
          user: req.user || 'not loged',
          message: `Create a wish with parameters ${JSON.stringify(req.body)}`,
          wish: wish
        })
      )
      .catch(err=>res.status(400).json({
        user: req.user || 'not loged',
        message: 'Error saving wish',
        err
      }));
  }
}

const edit = (req, res, next) =>{
  Wish.findById (req.params.id)
    .exec()
    .then( wish => {
        wish = Object.assign(wish, req.body);
        wish.save()
          .then( modifiedEdition =>{
            res.status(201).json({
              user: req.user || 'not loged',
              message: `Edit a wish with id parameters ${req.params.id}`,
              wish: modifiedEdition
            })
          });
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying wish',
      err
    }));
}

const remove = (req, res, next) =>{
  Wish.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Delete a wish with id ${req.params.id}`
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying wish',
      err
    }));
}

module.exports = {
  getAll,
  getByUser,
  getOne,
  create,
  edit,
  remove
}
