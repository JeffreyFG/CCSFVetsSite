var express = require('express');
var router = express.Router();
var path = require("path");
var isLoggedIn = require('../middleware/routeprotectors').userIsloggedIn;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.sendFile('Landingpage.html',{root:'public/html'});
});

router.get('/certify',function(req,res,next)
{
  res.sendFile('Certify.html',{root:'public/html'});

});
router.get('/newstudents',function(req,res,next)
{
  res.sendFile('NewStudnets.html',{root:'public/html'});
});
router.post('/certify',function(req,res,next)
{
  res.redirect('/certified',{root:'public/html'});
});
router.get('/certified', function(req,res,next)
{
  res.send("certified");
});
router.post("/news_student_register", function(req,res,next)
{
  
})

module.exports = router;
