const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');
const {
  getAll, search, getOne, create, edit, remove
} = require('../api/brand/brand.controller');

router.get('/', getAll);

router.get('/search/:term', search);

router.get('/create', badRequest(405, 'Use this route with POST'));
router.post('/create', create);

router.put('/edit/:id', edit);
router.get('/edit/:id', badRequest(405, 'Use this route with PUT'));
router.post('/edit/:id', badRequest(405, 'Use this route with PUT'));

router.get('/remove/:id', badRequest(405, 'Use this route with DELETE'));
router.post('/remove/:id', badRequest(405, 'Use this route with DELETE'));
router.delete('/remove/:id', remove);

router.get('/:id', getOne);

module.exports = router;
