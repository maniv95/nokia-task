var express = require('express');
var router = express.Router();

var controller = require('../Controllers/controller')

router.get('/getStore', controller.getStore);
router.post('/importTar',controller.importTar);
router.post('/exportTar',controller.exportTar);

module.exports = router;