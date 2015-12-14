var loopback = require('loopback');
var boot = require('loopback-boot');
var multer = require('multer');
var upload = multer({ dest: './uploads/',
    rename: function(fieldname,filename,req,res) {
    }
});
var app = module.exports = loopback();
var fs = require('fs')

app.post('/api/v1/photo/upload', upload.single('photo'), function(req, res){
    var f = req.file
    console.log(f) // form files
    fs.rename(f.path,f.path+'_'+f.originalname,function() {
        console.log('renamed');
    });
    res.status(204).end()
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
