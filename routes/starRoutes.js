const express = require('express');
const router = express.Router();
const starController = require('../controllers/starController');

router.get('/', starController.getAll);          // GET /stars
router.get('/:id', starController.getOne);       // GET /stars/:id
router.post('/', starController.create);         // POST /stars
router.put('/:id', starController.update);       // PUT /stars/:id
router.delete('/:id', starController.delete);    // DELETE /stars/:id

module.exports = router;
