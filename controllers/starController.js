const { Star } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const star = await Star.create(req.body);
      res.status(201).json(star);
    } catch (err) {
      console.error('Error creating star:', err.message);
      res.status(400).json({ error: 'Failed to create star' });
    }
  },

  async getAll(req, res) {
    try {
      const stars = await Star.findAll();
      res.json(stars);
    } catch (err) {
      console.error('Error fetching stars:', err.message);
      res.status(500).json({ error: 'Failed to fetch stars' });
    }
  },

  async getOne(req, res) {
    try {
      const star = await Star.findByPk(req.params.id);
      if (!star) return res.status(404).json({ error: 'Star not found' });
      res.json(star);
    } catch (err) {
      console.error('Error fetching star:', err.message);
      res.status(500).json({ error: 'Failed to fetch star' });
    }
  }
};
