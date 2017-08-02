require('dotenv').config({path: '../../.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const Edition = require('../../api/edition/edition.model');

let
  xps15 = '59819ca904b41a43a68ffbe9',
  zxflu = '59819ca904b41a43a68ffbea',
  jeste = '59819ca904b41a43a68ffbeb',
  mimix = '59819ca904b41a43a68ffbec',
  tranb = '59819ca904b41a43a68ffbed',
  pants = '59819ca904b41a43a68ffbee',
  jacke = '59819ca904b41a43a68ffbef';

const products = [
  {productId: xps15, name: '9560 4K',           features: [
    {name: 'screen resolution', value: '4K'},
    {name: 'tactile screen', value: 'true'}]},
  {productId: zxflu, name: 'Burgundi special',  features: []},
  {productId: jeste, name: 'regular',           features: []},
  {productId: mimix, name: '256Gb',             features: []},
  {productId: tranb, name: '16Gb i7',           features: []},
  {productId: pants, name: 'regular',           features: ['pants']},
  {productId: jacke, name: 'regular',           features: []}
];

Edition.create(products, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((edition) => {
    console.log('created',edition.name);
  });
  mongoose.connection.close();
});
