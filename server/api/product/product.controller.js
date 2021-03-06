const Product = require('./product.model');
const Edition = require('../edition/edition.model');

const getAll = (req, res, next) =>{
  Product.find()
    .populate('brandId')
    .sort({brandId : -1})
    .exec()
    .then(products=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: 'Request all products',
        products
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting products',
      err
    }));
}

const getByBrand = (req, res, next) => {
  Product.find({ brandId : req.params.id})
    .populate('brandId')
    .exec()
    .then(products=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request all products of the brand ${products[0].brandId.name}`,
        products
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting products',
      err
    }));
}

const getByName = (req, res, next) => {

  const brandId = req.body.brandId;
  const name = req.body.name;

  if(!brandId || !name){
    res.status(400).json({
      user: req.user || 'not loged',
      message: `Send brandId and name`
    })
    return;
  }

  Product.find(
    {$and: [
      {brandId},
      {$or: [
        {name: name},
        {name: name.toUpperCase()},
        {name: [name[0].toUpperCase(),name.slice(1).toLowerCase()].join('')},
        {name: name.toLowerCase()},
        ]
      }
    ]})
    .exec()
    .then(product=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: 'Request all products',
        product
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting products',
      err
    }));
}

const getOne = (req, res, next) =>{
  Product.findById( req.params.id)
    .populate('brandId')
    .exec()
    .then(product=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Request a product with id ${req.params.id}`,
        product
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error requesting product',
      err
    }));
}

const create = (req, res, next) =>{
  const { brandId, name, ref, tags } = req.body;
  if( !brandId || !name || !ref ){
    res.status(400).json({
      user: req.user || 'not loged',
      message: 'Fulfill brandId/name/ref'
    })
  }
  else{
    const product = new Product({brandId, name, ref, tags});
    product
      .save()
      .then(b => {
        const edition = new Edition({productId:b._id, name: '(Any)'});
        edition.save()
          .then( r => res.status(201).json({
              user: req.user || 'not loged',
              message: `Create a product with parameters ${JSON.stringify(req.body)}`,
              product: b}));
        }
      )
      .catch(err=>res.status(400).json({
        user: req.user || 'not loged',
        message: 'Error saving product',
        err
      }));
  }
}

const edit = (req, res, next) =>{
  Product.findById (req.params.id)
    .exec()
    .then( product => {
        product = Object.assign(product, req.body);
        product.save()
          .then( modifiedProduct =>{
            res.status(201).json({
              user: req.user || 'not loged',
              message: `Edit a product with id parameters ${req.params.id}`,
              product: modifiedProduct
            })
          });
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying product',
      err
    }));
}

const remove = (req, res, next) =>{
  Product.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
      res.status(200).json({
        user: req.user || 'not loged',
        message: `Delete a product with id ${req.params.id}`
      })
    })
    .catch(err=>res.status(400).json({
      user: req.user || 'not loged',
      message: 'Error modifying product',
      err
    }));
}

module.exports = {
  getAll,
  getByBrand,
  getOne,
  getByName,
  create,
  edit,
  remove
}
