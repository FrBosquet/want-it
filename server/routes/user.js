const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');

const {
  ensureLogin, signup, getById, login, logout, getuser, all
} = require('../api/user/user.controller');

router.get('/', (req, res, next) =>{
  res.render('index', {user: req.user});
})

router.get('/signup', badRequest(405, 'Use this route with POST'));
router.post('/signup', signup);

router.get('/login', badRequest(405, 'Use this route with POST'));
router.post('/login', login);

router.get('/logout', ensureLogin(), logout);
router.get('/get/:id', getById);
router.get('/getuser', getuser);
router.get('/all', all);



module.exports = router;
