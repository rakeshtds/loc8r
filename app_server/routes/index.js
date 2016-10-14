var express = require('express');
var router = express.Router();

var homepagecontroller = function(req, res, next) {
  res.render('index', { title: 'Express' });
};

var ctrMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrMain.index);


module.exports = router;
