var express = require('express');
var router = express.Router();

var multer=require('multer');
var path=require('path');


var store=multer.diskStorage({
destination:function(req,file,cb){
  cb(null,'./uploads')
},
filename:function(req,file,cb)
  {
    cb(null,file.originalname)
  }
});


var upload=multer({storage:store}).single('file');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload',function(req,res,next){ 
  upload(req,res,function(err){
    if(err)
    {
     return  res.status(501).json({error:err});
    }
    return res.json({originalName:req.file.originalname,uploadName:req.file.filename});
  });

});

router.post('/download',function(req,res,next){ 
  console.log("Hello Frandss");
var filepath=path.join(__dirname,"../uploads") + "/" + req.body.fileName;
res.sendFile(filepath);

});




module.exports = router;
