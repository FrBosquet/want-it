require('dotenv').config({path: '../../.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_URL);
const Wish = require('../../api/wish/wish.model');

let
  fran = '5980c053de5815394ba2a341',
  anam = '5981dd8a613e15760a8be256',
  mike = '5981ddaa613e15760a8be257',
  moni = '5981ddc9613e15760a8be258';

let
  xp4k = '5981b136116e4e58bae65b58',
  ajre = '5981b136116e4e58bae65b5e',
  mimi = '5981b119d902f45861a98bb4',
  jest = '5981b136116e4e58bae65b5a',
  zxfr = '5981b136116e4e58bae65b59',
  zxfb = '5981b119d902f45861a98bb2';

const wishes = [
  { userId: fran, editionId: xp4k },
  { userId: anam, editionId: ajre },
  { userId: mike, editionId: mimi },
  { userId: moni, editionId: jest }
];

Wish.create(wishes, (err, sol) => {
  if (err) {
    throw err;
  }

  sol.forEach((wish) => {
    console.log('created',wish.name);
  });
  mongoose.connection.close();
});
