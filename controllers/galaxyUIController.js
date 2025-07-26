// controllers/galaxyUIController.js
const { Galaxy } = require('../models');

module.exports = {
  async index(req, res) {
    const galaxies = await Galaxy.findAll();
    res.render('galaxies/index', { galaxies });
  },

  newForm(req, res) {
    res.render('galaxies/new');
  },

  async show(req, res) {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (!galaxy) return res.status(404).render('error', { error: 'Galaxy not found' });
    res.render('galaxies/show', { galaxy });
  },

  async create(req, res) {
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await Galaxy.create(data);
    res.redirect('/galaxies-ui');
  },

  async editForm(req, res) {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (!galaxy) return res.status(404).render('error', { error: 'Galaxy not found' });
    res.render('galaxies/edit', { galaxy });
  },

  async update(req, res) {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (!galaxy) return res.status(404).render('error', { error: 'Galaxy not found' });
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await galaxy.update(data);
    res.redirect('/galaxies-ui');
  },

  async delete(req, res) {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (!galaxy) return res.status(404).render('error', { error: 'Galaxy not found' });
    await galaxy.destroy();
    res.redirect('/galaxies-ui');
  }
};
