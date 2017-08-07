const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');
const multer = require('multer');
const upload = multer({dest: './public/images/stage'}).single('file');
var shell = require('shelljs');

router.get('/', badRequest(405, 'Use this route with POST'));

router.post('/', (req, res, next)=>{
  upload(req, res, err =>{
    if(err){
      console.log(err);
      return res.status(422).json({message:"An error occurred"});
    }

    const file = req.file.path;
    return res.status(201).json({
      message: "Success",
      path: file,
      filename: file.split('/').reverse()[0]});
  })
})

router.post('/save', (req, res, next)=>{
  const file = req.body.id;
  shell.mv(`public/images/stage/${file}`, `public/images/`);
  res.status(200).json({
    message: 'Succesfully saved photo'
  })
})

router.post('/delete', (req, res, next)=>{
  const file = req.body.id;
  const path = `public/images/stage/${file}`;
  shell.rm(path);
  res.status(200).json({
    message: 'Succesfully erased photo from stage'
  })
})

module.exports = router;
