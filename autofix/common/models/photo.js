var loopback = require('loopback');
var path = require('path')

var ds = loopback.createDataSource({
    connector: require('loopback-storage-service'),
    provider: 'filesystem',
    root: path.join(__dirname, '../../media')
});

var files = ds.createModel('files');

module.exports = function(Photo) {
    Photo.upload = function(req, cb) {
        //console.log(typeof ds);
        //console.log(req);
        console.log(req.files);
        cb(null, 'response');
    };

    Photo.remoteMethod(
    'upload',
    {
      accepts: {arg: 'req', type: 'object', http: function(context) {
            return context.req;
        }
    },
      returns: {arg: 'status', type: 'string'}
    }
    );
};
