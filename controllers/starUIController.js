const { Star, Galaxy, Planet } = require('../models');

module.exports = {
  async index(req, res) {
    const stars = await Star.findAll({
      include: [{ model: Galaxy, as: 'galaxy' }]
    });
    res.render('stars/index', { stars });
  },

  async newForm(req, res) {
    const galaxies = await Galaxy.findAll();
    res.render('stars/new', { galaxies });
  },

  async create(req, res) {
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await Star.create(data);
    res.redirect('/stars-ui');
  },

  async show(req, res) {
    const star = await Star.findByPk(req.params.id, {
      include: [{ model: Galaxy, as: 'galaxy' }]
    });
    if (!star) return res.status(404).render('error', { error: 'Star not found' });
    res.render('stars/show', { star });
  },

  async editForm(req, res) {
    const star = await Star.findByPk(req.params.id);
    const galaxies = await Galaxy.findAll();
    if (!star) return res.status(404).render('error', { error: 'Star not found' });
    res.render('stars/edit', { star, galaxies });
  },

  async update(req, res) {
    const star = await Star.findByPk(req.params.id);
    if (!star) return res.status(404).render('error', { error: 'Star not found' });
    const data = { ...req.body };
    if (req.file) data.image = req.file.filename;
    await star.update(data);
    res.redirect('/stars-ui');
  },

  async delete(req, res) {
    const star = await Star.findByPk(req.params.id);
    if (!star) return res.status(404).render('error', { error: 'Star not found' });
    await star.destroy();
    res.redirect('/stars-ui');
  }
};
