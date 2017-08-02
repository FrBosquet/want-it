const Edition = require('./edition.model');

const getAll = (req, res, next) =>{
  Edition.find()
    .populate('productId')
    .exec()
    .then(editions=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: 'Request all editions',
        editions
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting editions',
      err
    }));
}

const getByProduct = (req, res, next) => {
  Edition.find({ productId : req.params.id})
    .populate('productId')
    .exec()
    .then(editions=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all editions of the brand ${editions[0].productId.name}`,
        editions
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting editions',
      err
    }));
}

const getOne = (req, res, next) =>{
  Edition.findById( req.params.id)
    .populate('productId')
    .exec()
    .then(edition=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request a edition with id ${req.params.id}`,
        edition
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting edition',
      err
    }));
}

const create = (req, res, next) =>{
  const { productId, name, features } = req.body;
  if( !productId || !name ){
    res.status(400).json({
      user: req.user || 'not loged',
      message: 'Fulfill productId/name/features'
    })
  }
  else{
    const edition = new Edition({productId, name, features});
    edition
      .save()
      .then(
        b => res.status(201).json({
          user: req.user || 'not loged',
          message: `Create a edition with parameters ${JSON.stringify(req.body)}`,
          edition: b
        })
      )
      .catch(err=>res.status(400).json({
        user: req.user || 'not loged',
        message: 'Error saving edition',
        err
      }));
  }
}

const edit = (req, res, next) =>{
  Edition.findById (req.params.id)
    .exec()
    .then( edition => {
        edition = Object.assign(edition, req.body);
        edition.save()
          .then( modifiedEdition =>{
            res.status(201).json({
              user: req.user || 'not loged',
              message: `Edit a edition with id parameters ${req.params.id}`,
              edition: modifiedEdition
            })
          });
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying edition',
      err
    }));
}

const remove = (req, res, next) =>{
  Edition.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Delete a edition with id ${req.params.id}`
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying edition',
      err
    }));
}

module.exports = {
  getAll,
  getByProduct,
  getOne,
  create,
  edit,
  remove
}
