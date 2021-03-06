const path = require('path');

module.exports = (app) => {
  app.use('/brand',   require('./brand'   ));
  app.use('/product', require('./product' ));
  app.use('/edition', require('./edition' ));
  app.use('/photo',   require('./photo'   ));
  app.use('/wish',    require('./wish'    ));
  app.use('/post',    require('./post'    ));
  app.use('/shop',    require('./google'  ));
  app.use('/user',    require('./user'    ));

	// catch 404 and forward to Angular
  app.all('/*', function (req, res) {
    res.sendfile('public/index.html');
  });
};
