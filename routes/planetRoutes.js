const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planetController');

router.get('/', planetController.getAll);           // GET /planets
router.get('/:id', planetController.getOne);        // GET /planets/:id
router.post('/', planetController.create);          // POST /planets
router.put('/:id', planetController.update);        // PUT /planets/:id
router.delete('/:id', planetController.delete);     // DELETE /planets/:id

module.exports = router;
