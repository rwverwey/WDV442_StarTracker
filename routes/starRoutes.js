const express = require('express');
const router = express.Router();
const starController = require('../controllers/starController');

router.get('/', starController.getAll);
router.get('/:id', starController.getOne);
router.post('/', starController.create);

module.exports = router;
