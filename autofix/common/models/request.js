module.exports = function(Request) {

      Request.definition.properties.creation_ts.default = function() {
        return new Date();
      };

 Request.on('dataSourceAttached', function(obj){
    var find = Request.find;
    Request.find = function(filter, cb) {
      var args = arguments
      args.include = 'photos'
      var f =  find.apply(this, arguments);
      return f;
    };
  });

    // Request.photo = function(msg, cb) {
    //   cb(null, 'Greetings... ' + msg);
    // }
    //  
    // Request.remoteMethod(
    //     'photo', 
    //     {
    //       accepts: {arg: 'fk', type: 'number', required:true, http: {source:'path'}},
    //       http: { verb: 'get'},
    //       isStatic:false,
    //       returns: {arg: 'greeting', type: 'string'}
    //     }
    // ); 
};
