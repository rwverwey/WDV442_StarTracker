const express = require('express');
const router = express.Router();
const starsPlanetsController = require('../controllers/starsPlanetsController');

console.log('🔌 [DEBUG] starsPlanetsRoutes loaded');

router.get('/', starsPlanetsController.getAll);           // GET all star-planet links
router.get('/:id', starsPlanetsController.getOne);        // GET single link by ID
router.post('/', starsPlanetsController.create);          // POST new star-planet link
router.delete('/:id', starsPlanetsController.delete);     // DELETE link by ID

module.exports = router;
