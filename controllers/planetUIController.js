const { Planet, Star } = require('../models');

module.exports = {
  async index(req, res) {
    const planets = await Planet.findAll({
      include: [{ model: Star, as: 'stars' }]
    });
    res.render('planets/index', { planets });
  },

  async newForm(req, res) {
    const stars = await Star.findAll();
    res.render('planets/new', { stars });
  },

  async create(req, res) {
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await Planet.create(data);
    res.redirect('/planets-ui');
  },

  async show(req, res) {
    const planet = await Planet.findByPk(req.params.id, {
      include: [{ model: Star, as: 'stars' }]
    });
    if (!planet) return res.status(404).render('error', { error: 'Planet not found' });
    res.render('planets/show', { planet });
  },

  async editForm(req, res) {
    const planet = await Planet.findByPk(req.params.id);
    const stars = await Star.findAll();
    if (!planet) return res.status(404).render('error', { error: 'Planet not found' });
    res.render('planets/edit', { planet, stars });
  },

  async update(req, res) {
    const planet = await Planet.findByPk(req.params.id);
    if (!planet) return res.status(404).render('error', { error: 'Planet not found' });
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await planet.update(data);
    res.redirect('/planets-ui');
  },

  async delete(req, res) {
    const planet = await Planet.findByPk(req.params.id);
    if (!planet) return res.status(404).render('error', { error: 'Planet not found' });
    await planet.destroy();
    res.redirect('/planets-ui');
  }
};
