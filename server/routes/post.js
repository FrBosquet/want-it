const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');
const {
  getAll, getByUser, getByWish, getByProduct, getByBrand, getByEdition, getOneOfProduct, getOneOfEdition, getOne, create, edit, remove
} = require('../api/post/post.controller');

router.get('/', getAll);

router.get('/create', badRequest(405, 'Use this route with POST'));
router.post('/create', create);

router.get('/edit/:id', badRequest(405, 'Use this route with PUT'));
router.post('/edit/:id', badRequest(405, 'Use this route with PUT'));
router.put('/edit/:id', edit);

router.get('/remove/:id', badRequest(405, 'Use this route with DELETE'));
router.post('/remove/:id', badRequest(405, 'Use this route with DELETE'));
router.delete('/remove/:id', remove);

router.get('/user/:id', getByUser);
router.get('/brand/:id', getByBrand);
router.get('/product/:id', getByProduct);
router.get('/product/one/:id', getOneOfProduct);
router.get('/edition/one/:id', getOneOfEdition);
router.get('/edition/:id', getByEdition);
router.get('/wish/:id', getByWish);

router.get('/:id', getOne);

module.exports = router;
