const { Planet } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const planets = await Planet.findAll();
      res.json(planets);
    } catch (err) {
      console.error('❌ Error fetching planets:', err);
      res.status(500).json({ error: 'Failed to fetch planets' });
    }
  },

  async getOne(req, res) {
    try {
      const planet = await Planet.findByPk(req.params.id);
      if (!planet) return res.status(404).json({ error: 'Planet not found' });
      res.json(planet);
    } catch (err) {
      console.error('❌ Error fetching planet by ID:', err);
      res.status(500).json({ error: 'Failed to fetch planet' });
    }
  },

  async create(req, res) {
    try {
      const newPlanet = await Planet.create(req.body);
      res.status(201).json(newPlanet);
    } catch (err) {
      console.error('❌ Error creating planet:', err);
      res.status(400).json({ error: 'Failed to create planet' });
    }
  },

  async update(req, res) {
    try {
      const planet = await Planet.findByPk(req.params.id);
      if (!planet) return res.status(404).json({ error: 'Planet not found' });

      await planet.update(req.body);
      res.json(planet);
    } catch (err) {
      console.error('❌ Error updating planet:', err);
      res.status(400).json({ error: 'Failed to update planet' });
    }
  },

  async delete(req, res) {
    try {
      const planet = await Planet.findByPk(req.params.id);
      if (!planet) return res.status(404).json({ error: 'Planet not found' });

      await planet.destroy();
      res.status(204).end();
    } catch (err) {
      console.error('❌ Error deleting planet:', err);
      res.status(500).json({ error: 'Failed to delete planet' });
    }
  }
};
