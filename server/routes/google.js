const express = require('express');
const router = express.Router();
const badRequest = require('./badRequest');
var google = require('google');

google.resultsPerPage = 5
// var nextCounter = 0
//
// google('shopping dell xps 15', function (err, res){
//   if (err) console.error(err)
//
//   console.log(res.links)
// })
router.get('/', badRequest(405, 'Use this route with POST'));
router.post('/', (req, res, next)=>{
  // console.log(req.params.query);
  const query = req.body.query;
  google(`shoppin ${query}`, (err, ans)=>{
    if(err) return res.json({
      message: 'There was an error requesting to google',
      err
    });

    res.json({
      message: 'Request a google search',
      links: ans.links
    });

  })
})

module.exports = router;
