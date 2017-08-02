const path = require('path');

module.exports = (app) => {
  app.use('/brand',   require('./brand'));
  app.use('/product', require('./product'));
  app.use('/user',    require('./user'));

	// catch 404 and forward to Angular
  // app.all('/*', function (req, res) {
  //   res.sendfile(__dirname + '/public/index.html');
  // });
};
