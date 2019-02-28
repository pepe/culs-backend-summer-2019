const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CULSY CULS' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Registratin on CULS' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login on CULS' });
});

module.exports = router;
