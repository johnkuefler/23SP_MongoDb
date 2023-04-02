var express = require('express');
var router = express.Router();
const personsController = require('../controllers/personsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function(req, res, next) {
  await personsController.person_create(req, res);
});

module.exports = router;
