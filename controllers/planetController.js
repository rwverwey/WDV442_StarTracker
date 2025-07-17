const { Planet } = require('../models');

console.log('[DEBUG] planetController loaded');

module.exports = {
  async getAll(req, res) {
    console.log('[DEBUG] getAll called');

    try {
      const planets = await Planet.findAll();
      console.log(`[DEBUG] Found ${planets.length} planets`);
      res.json(planets);
    } catch (err) {
      console.error('[ERROR] Failed to fetch planets:', err.message);
      res.status(500).json({ error: 'Failed to fetch planets' });
    }
  },

  async getOne(req, res) {
    console.log(`[DEBUG] getOne called with ID: ${req.params.id}`);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`[DEBUG] Invalid ID: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid planet ID' });
    }

    try {
      const planet = await Planet.findByPk(id);
      if (!planet) {
        console.warn(`[DEBUG] Planet not found: ID ${id}`);
        return res.status(404).json({ error: 'Planet not found' });
      }

      console.log('[DEBUG] Planet found:', planet.toJSON());
      res.json(planet);
    } catch (err) {
      console.error('[ERROR] Failed to get planet:', err.message);
      res.status(500).json({ error: 'Failed to get planet' });
    }
  },

  async create(req, res) {
    console.log('🛠️ [DEBUG] create called with body:', req.body);

    try {
      const planet = await Planet.create(req.body);
      console.log('[DEBUG] Planet created:', planet.toJSON());
      res.status(201).json(planet);
    } catch (err) {
      console.error('[ERROR] Failed to create planet:', err.message);
      res.status(400).json({ error: 'Failed to create planet' });
    }
  },

  async update(req, res) {
    console.log(`[DEBUG] update called with ID: ${req.params.id}, body:`, req.body);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`[DEBUG] Invalid ID: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid planet ID' });
    }

    try {
      const planet = await Planet.findByPk(id);
      if (!planet) {
        console.warn(`[DEBUG] Planet not found: ID ${id}`);
        return res.status(404).json({ error: 'Planet not found' });
      }

      await planet.update(req.body);
      console.log('[DEBUG] Planet updated:', planet.toJSON());
      res.json(planet);
    } catch (err) {
      console.error('[ERROR] Failed to update planet:', err.message);
      res.status(400).json({ error: 'Failed to update planet' });
    }
  },

  async delete(req, res) {
    console.log(`🗑️ [DEBUG] delete called with ID: ${req.params.id}`);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`[DEBUG] Invalid ID: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid planet ID' });
    }

    try {
      const planet = await Planet.findByPk(id);
      if (!planet) {
        console.warn(`[DEBUG] Planet not found: ID ${id}`);
        return res.status(404).json({ error: 'Planet not found' });
      }

      await planet.destroy();
      console.log(`[DEBUG] Planet deleted: ID ${id}`);
      res.status(204).end();
    } catch (err) {
      console.error('[ERROR] Failed to delete planet:', err.message);
      res.status(500).json({ error: 'Failed to delete planet' });
    }
  }
};
