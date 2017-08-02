require('dotenv').config({path: '../../.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const Product = require('../../api/product/product.model');

let
  dell = '598079941623ac4e6a9b1706',
  adid = '598079941623ac4e6a9b1708',
  tnfa = '598079941623ac4e6a9b170a',
  xiao = '598079941623ac4e6a9b170b',
  asus = '598079941623ac4e6a9b1707',
  cola = '598079941623ac4e6a9b170c',
  orig = '598079941623ac4e6a9b1709';

const products = [
  {brandId: dell, name: 'XPS15',            ref:"xps15",   tags: ['laptop', '15,6 inch']},
  {brandId: adid, name: 'ZX Flux',          ref:"zxf",     tags: ['trainers']},
  {brandId: tnfa, name: 'Jest',             ref:"jst",     tags: ['backpack']},
  {brandId: xiao, name: 'MiMix',            ref:"mmx",     tags: ['cellphone']},
  {brandId: asus, name: 'Transformer book', ref:"tbpro",   tags: ['laptop']},
  {brandId: cola, name: 'Pants',            ref:"pants",   tags: ['clothes', 'pants']},
  {brandId: orig, name: 'Jacket',           ref:"jack23",  tags: ['clothes']}
];

Product.create(products, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((product) => {
    console.log('created',product.name);
  });
  mongoose.connection.close();
});
