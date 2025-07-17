const express = require('express');
const router = express.Router();
const galaxyController = require('../controllers/galaxyController');

router.get('/', galaxyController.getAll);          // GET /galaxies
router.get('/:id', galaxyController.getOne);       // GET /galaxies/:id
router.post('/', galaxyController.create);         // POST /galaxies
router.put('/:id', galaxyController.update);       // PUT /galaxies/:id
router.delete('/:id', galaxyController.delete);    // DELETE /galaxies/:id

module.exports = router;
