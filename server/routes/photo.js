const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');
const multer = require('multer');
const upload = multer({dest: './public/images/stage'}).single('file');


router.get('/', badRequest(405, 'Use this route with POST'));

router.post('/', (req, res, next)=>{
  console.log('Trying to upload a photo');
  upload(req, res, err =>{
    if(err){
      console.log(err);
      return res.status(422).json({message:"An error occurred"});
    }

    const file = req.file.path;
    return res.status(201).json({
      message:"Success",
      path: file,
      filename: file.split('/').reverse()[0]});
  })
})

module.exports = router;
