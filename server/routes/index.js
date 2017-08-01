const path = require('path');

module.exports = (app) => {
  app.use('/brand', require('./brand'));

	// catch 404 and forward to Angular
  // app.all('/*', function (req, res) {
  //   res.sendfile(__dirname + '/public/index.html');
  // });
};
