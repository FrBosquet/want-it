require('dotenv').config({path: '../.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const Brand = require('../api/brand/brand.model');

const brands = [
  {name: 'Dell',              country: 'USA',     fullName: 'DELL'},
  {name: 'Asus',              country: 'Taiwan',  fullName: 'ASUSTEK'},
  {name: 'Adidas',            country: 'Germany', fullName: 'Adidas Sport'},
  {name: 'Adidas Originals',  country: 'Germany', fullName: 'Adidas Originals Clothing'},
  {name: 'The North Face',    country: 'USA',     fullName: 'The North Face Co.'},
  {name: 'Xiaomi',            country: 'China',   fullName: 'The North Face Co.'},
  {name: 'Coca Cola',         country: 'USA',     fullName: 'The CocaCola Company.'},
];

Brand.create(brands, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((brand) => {
    console.log('created',brand.name);
  });
  mongoose.connection.close();
});
