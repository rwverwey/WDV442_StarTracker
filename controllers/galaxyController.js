const { Galaxy } = require('../models');

console.log('📦 [DEBUG] galaxyController loaded');

module.exports = {
  async getAll(req, res) {
    console.log('🌌 [DEBUG] getAll called');

    try {
      console.log('🌌 [DEBUG] Attempting to fetch all galaxies from database');
      const galaxies = await Galaxy.findAll();
      console.log(`✅ [DEBUG] Found ${galaxies.length} galaxies`);
      res.json(galaxies);
    } catch (err) {
      console.error('❌ [ERROR] Failed to fetch galaxies:', err.message);
      console.error('❌ [ERROR] Error name:', err.name);
      console.error('❌ [ERROR] Full error:', err);
      console.error('❌ [ERROR] Stack trace:', err.stack);
      
      // Check if it's a database connection error
      if (err.name === 'SequelizeConnectionError' || err.name === 'SequelizeConnectionRefusedError') {
        console.error('❌ [ERROR] Database connection issue detected');
        return res.status(503).json({ error: 'Database connection unavailable' });
      }
      
      res.status(500).json({ error: 'Failed to fetch galaxies' });
    }
  },

  async getOne(req, res) {
    console.log(`🔍 [DEBUG] getOne called with ID: ${req.params.id}`);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`⚠️ [DEBUG] Invalid ID parameter: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid galaxy ID' });
    }

    try {
      console.log(`🔍 [DEBUG] Attempting to find galaxy with ID: ${id}`);
      const galaxy = await Galaxy.findByPk(id);
      
      if (!galaxy) {
        console.log(`❌ [DEBUG] Galaxy not found for ID: ${id}`);
        return res.status(404).json({ error: 'Galaxy not found' });
      }

      console.log(`✅ [DEBUG] Galaxy found:`, galaxy.toJSON());
      res.json(galaxy);
    } catch (err) {
      console.error('❌ [ERROR] Failed to fetch galaxy:', err.message);
      console.error('❌ [ERROR] Error name:', err.name);
      console.error('❌ [ERROR] Full error:', err);
      console.error('❌ [ERROR] Stack trace:', err.stack);
      
      // Check if it's a database connection error
      if (err.name === 'SequelizeConnectionError' || err.name === 'SequelizeConnectionRefusedError') {
        console.error('❌ [ERROR] Database connection issue detected');
        return res.status(503).json({ error: 'Database connection unavailable' });
      }
      
      res.status(500).json({ error: 'Failed to fetch galaxy' });
    }
  },

  async create(req, res) {
    console.log('🚀 [DEBUG] create called with body:', req.body);

    try {
      const galaxy = await Galaxy.create(req.body);
      console.log('✅ [DEBUG] Galaxy created:', galaxy.toJSON());
      res.status(201).json(galaxy);
    } catch (err) {
      console.error('❌ [ERROR] Failed to create galaxy:', err.message);
      console.error(err.stack);
      res.status(400).json({ error: 'Failed to create galaxy' });
    }
  },

  async update(req, res) {
    console.log(`🔧 [DEBUG] update called with ID: ${req.params.id}, body:`, req.body);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`⚠️ [DEBUG] Invalid ID parameter: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid galaxy ID' });
    }

    try {
      const galaxy = await Galaxy.findByPk(id);
      if (!galaxy) {
        console.warn(`❌ [DEBUG] Galaxy not found for update ID: ${id}`);
        return res.status(404).json({ error: 'Galaxy not found' });
      }

      await galaxy.update(req.body);
      console.log('✅ [DEBUG] Galaxy updated:', galaxy.toJSON());
      res.json(galaxy);
    } catch (err) {
      console.error('❌ [ERROR] Failed to update galaxy:', err.message);
      console.error(err.stack);
      res.status(400).json({ error: 'Failed to update galaxy' });
    }
  },

  async delete(req, res) {
    console.log(`🗑️ [DEBUG] delete called with ID: ${req.params.id}`);

    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      console.warn(`⚠️ [DEBUG] Invalid ID parameter: ${req.params.id}`);
      return res.status(400).json({ error: 'Invalid galaxy ID' });
    }

    try {
      const galaxy = await Galaxy.findByPk(id);
      if (!galaxy) {
        console.warn(`❌ [DEBUG] Galaxy not found for delete ID: ${id}`);
        return res.status(404).json({ error: 'Galaxy not found' });
      }

      await galaxy.destroy();
      console.log(`✅ [DEBUG] Galaxy deleted with ID: ${id}`);
      res.status(204).end();
    } catch (err) {
      console.error('❌ [ERROR] Failed to delete galaxy:', err.message);
      console.error(err.stack);
      res.status(500).json({ error: 'Failed to delete galaxy' });
    }
  }
};