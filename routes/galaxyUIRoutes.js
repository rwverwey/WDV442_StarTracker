// routes/galaxyUIRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/galaxyUIController');
const upload = require('../middleware/upload');

router.get('/', controller.index);
router.get('/new', controller.newForm);
router.post('/', upload.single('image'), controller.create);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.editForm);
router.put('/:id', upload.single('image'), controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
