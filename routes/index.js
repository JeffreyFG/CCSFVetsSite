var express = require('express');
var router = express.Router();
var path = require("path");
var isLoggedIn = require('../middleware/routeprotectors').userIsloggedIn;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.sendFile('Certify.html',{root:'public/html'});
});


router.use('/postimage',isLoggedIn); 
router.get('/postimage', function(req, res, next) {
  res.sendFile('postimage.html',{root:'public/html'});
});
router.post('/certify',function(req,res,next)
{
  res.redirect('/certified');
});
router.get('/certified', function(req,res,next)
{
  res.send("certified");
});

module.exports = router;
