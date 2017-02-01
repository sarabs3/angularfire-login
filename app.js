var express = require('express');
var app     = express();
var server  = require('http').createServer(app);

var fs      = require('fs'),
    multer  = require('multer');		


server.listen(process.env.PORT || 3000, '0.0.0.0',function(){
	console.log('app is working at port 3000');
});
var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, datetimestamp+'-' +file.originalname)
  }
});

var upload = multer({
  storage:storage
});


app.post('/fileUpload',upload.single('file'),function(req,res){
  res.send(req.file.filename);
});

app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
    res.sendFile('/index.html', { root: __dirname }); // load our public/index.html file
});