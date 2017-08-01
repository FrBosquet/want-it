const Brand = require('./brand.model');

const getAll = (req, res, next) =>{
  Brand.find()
    .exec()
    .then(brands=>{
      res.json({
        message: 'Request all brands',
        brands
      })
    })
    .catch(err=>res.json({
      message: 'Error requesting brands',
      err
    }));
}

const getOne = (req, res, next) =>{
  Brand.findById( req.params.id)
    .exec()
    .then(brand=>{
      res.json({
        message: `Request a brand with id ${req.params.id}`,
        brand
      })
    })
    .catch(err=>res.json({
      message: 'Error requesting brand',
      err
    }));
}

const create = (req, res, next) =>{
  const { name, country, fullName } = req.body;
  if( !name || !country || !fullName ){
    res.status(400).json({
      message: 'Fulfill name/country/fullName'
    })
  }
  else{
    const brand = new Brand({name, country, fullName});
    brand
      .save()
      .then(
        b => res.json({
          message: `Create a brand with parameters ${JSON.stringify(req.body)}`,
          brand: b
        })
      )
      .catch(err=>res.json({
        message: 'Error saving brand',
        err
      }));
  }
}

const edit = (req, res, next) =>{
  Brand.findById (req.params.id)
    .exec()
    .then( brand => {
        brand = Object.assign(brand, req.body);
        brand.save()
          .then( modifiedBrand =>{
            res.json({
              message: `Edit a brand with id parameters ${req.params.id}`,
              brand: modifiedBrand
            })
          });
    })
    .catch(err=>res.json({
      message: 'Error modifying brand',
      err
    }));
}

const remove = (req, res, next) =>{
  Brand.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
      res.json({
        message: `Delete a brand with id ${req.params.id}`
      })
    })
    .catch(err=>res.json({
      message: 'Error modifying brand',
      err
    }));
}

module.exports = {
  getAll,
  getOne,
  create,
  edit,
  remove
}
