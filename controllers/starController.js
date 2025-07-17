const { Star } = require('../models');

console.log('[DEBUG] starController loaded');

module.exports = {
  async getAll(req, res) {
    console.log('[DEBUG] getAll called');

    try {
      const stars = await Star.findAll();
      console.log(`[DEBUG] Found ${stars.length} stars`);
      res.json(stars);
    } catch (err) {
      console.error('[ERROR] Failed to fetch stars:', err.message);
      res.status(500).json({ error: 'Failed to fetch stars' });
    }
  },

  async getOne(req, res) {
    const id = req.params.id;
    console.log(`[DEBUG] getOne called with id=${id}`);

    try {
      const star = await Star.findByPk(id);
      if (!star) {
        console.warn(`[WARN] Star with id=${id} not found`);
        return res.status(404).json({ error: 'Star not found' });
      }
      console.log(`[DEBUG] Found star: ${star.name}`);
      res.json(star);
    } catch (err) {
      console.error('[ERROR] Failed to fetch star:', err.message);
      res.status(500).json({ error: 'Failed to fetch star' });
    }
  },

  async create(req, res) {
    console.log('[DEBUG] create called');
    console.log('[DEBUG] Payload:', req.body);

    try {
      const star = await Star.create(req.body);
      console.log(`[DEBUG] Created star with id=${star.id}`);
      res.status(201).json(star);
    } catch (err) {
      console.error('[ERROR] Failed to create star:', err.message);
      res.status(400).json({ error: 'Failed to create star' });
    }
  },

  async update(req, res) {
    const id = req.params.id;
    console.log(`[DEBUG] update called with id=${id}`);
    console.log('[DEBUG] Update payload:', req.body);

    try {
      const star = await Star.findByPk(id);
      if (!star) {
        console.warn(`[WARN] Star with id=${id} not found`);
        return res.status(404).json({ error: 'Star not found' });
      }

      await star.update(req.body);
      console.log(`[DEBUG] Updated star with id=${id}`);
      res.json(star);
    } catch (err) {
      console.error('[ERROR] Failed to update star:', err.message);
      res.status(400).json({ error: 'Failed to update star' });
    }
  },

  async delete(req, res) {
    const id = req.params.id;
    console.log(`[DEBUG] delete called with id=${id}`);

    try {
      const star = await Star.findByPk(id);
      if (!star) {
        console.warn(`[WARN] Star with id=${id} not found`);
        return res.status(404).json({ error: 'Star not found' });
      }

      await star.destroy();
      console.log(`[DEBUG] Deleted star with id=${id}`);
      res.json({ message: 'Star deleted successfully' });
    } catch (err) {
      console.error('[ERROR] Failed to delete star:', err.message);
      res.status(500).json({ error: 'Failed to delete star' });
    }
  }
};
