const { StarsPlanets } = require('../models');

console.log('📦 [DEBUG] starsPlanetsController loaded');

module.exports = {
    async getAll(req, res) {
        console.log('🪐 [DEBUG] getAll called for StarsPlanets');
        try {
            const links = await StarsPlanets.findAll();
            console.log(`✅ [DEBUG] Found ${links.length} links`);
            res.json(links);
        } catch (err) {
            console.error('❌ [ERROR] Failed to fetch star-planet links:', err);
            res.status(500).json({ error: 'Failed to fetch star-planet links' });
        }
    },

    async getOne(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID for StarsPlanets' });
        }

        try {
            const link = await StarsPlanets.findByPk(id);
            if (!link) {
                return res.status(404).json({ error: 'Link not found' });
            }
            res.json(link);
        } catch (err) {
            console.error('❌ [ERROR] Failed to fetch link:', err);
            res.status(500).json({ error: 'Failed to fetch star-planet link' });
        }
    },

    async create(req, res) {
        const { starId, planetId } = req.body;
        if (!starId || !planetId) {
            return res.status(400).json({ error: 'starId and planetId are required' });
        }

        try {
            const newLink = await StarsPlanets.create({ starId, planetId });
            res.status(201).json(newLink);
        } catch (err) {
            console.error('❌ [ERROR] Failed to create star-planet link:', err);
            res.status(500).json({ error: 'Failed to create star-planet link' });
        }
    },

    async update(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID for StarsPlanets' });
        }

        try {
            const link = await StarsPlanets.findByPk(id);
            if (!link) {
                return res.status(404).json({ error: 'Link not found' });
            }

            const { starId, planetId } = req.body;
            if (!starId && !planetId) {
                return res.status(400).json({ error: 'At least one of starId or planetId must be provided' });
            }

            if (starId) link.starId = starId;
            if (planetId) link.planetId = planetId;

            await link.save();
            res.json(link);
        } catch (err) {
            console.error('❌ [ERROR] Failed to update star-planet link:', err);
            res.status(500).json({ error: 'Failed to update star-planet link' });
        }
    },

    async delete(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID for StarsPlanets' });
        }

        try {
            const link = await StarsPlanets.findByPk(id);
            if (!link) {
                return res.status(404).json({ error: 'Link not found' });
            }

            await link.destroy();
            res.status(204).end();
        } catch (err) {
            console.error('❌ [ERROR] Failed to delete star-planet link:', err);
            res.status(500).json({ error: 'Failed to delete star-planet link' });
        }
    }
};
