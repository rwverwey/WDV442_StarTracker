const { StarsPlanets } = require('../models');

console.log('[DEBUG] starsPlanetsController loaded');

module.exports = {
    async getAll(req, res) {
        console.log('[DEBUG] getAll called for StarsPlanets');
        try {
            const links = await StarsPlanets.findAll();
            console.log(`[DEBUG] Found ${links.length} links`);
            res.json(links);
        } catch (err) {
            console.error('[ERROR] Failed to fetch star-planet links:', err);
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
            console.error('[ERROR] Failed to fetch link:', err);
            res.status(500).json({ error: 'Failed to fetch star-planet link' });
        }
    },

    async create(req, res) {
        try {
            const { starId, planetId } = req.body;
            console.log('[DEBUG] Incoming body:', req.body);

            const parsedStarId = parseInt(starId, 10);
            const parsedPlanetId = parseInt(planetId, 10);

            if (
                isNaN(parsedStarId) || isNaN(parsedPlanetId) ||
                parsedStarId <= 0 || parsedPlanetId <= 0
            ) {
                console.warn('[DEBUG] Invalid or missing starId/planetId');
                return res.status(400).json({ error: 'Valid starId and planetId are required' });
            }

            const existing = await StarsPlanets.findOne({
                where: { starId: parsedStarId, planetId: parsedPlanetId }
            });

            if (existing) {
                console.warn('[DEBUG] Duplicate entry found');
                return res.status(409).json({ error: 'This star is already linked to this planet.' });
            }


            const newLink = await StarsPlanets.create({
                starId: parsedStarId,
                planetId: parsedPlanetId
            });

            console.log('[DEBUG] New link created:', newLink.toJSON());
            return res.status(201).json(newLink);
        } catch (err) {
            console.error('[ERROR] Failed to create star-planet link:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    async update(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: 'Invalid ID for StarsPlanets' });
        }

        try {
            const link = await StarsPlanets.findByPk(id);
            if (!link) {
                return res.status(404).json({ error: 'Link not found' });
            }

            const { starId, planetId } = req.body;
            const parsedStarId = starId ? parseInt(starId, 10) : null;
            const parsedPlanetId = planetId ? parseInt(planetId, 10) : null;

            if (!parsedStarId && !parsedPlanetId) {
                return res.status(400).json({ error: 'At least one of starId or planetId must be provided' });
            }


            const newStarId = parsedStarId || link.starId;
            const newPlanetId = parsedPlanetId || link.planetId;

            const duplicate = await StarsPlanets.findOne({
                where: {
                    starId: newStarId,
                    planetId: newPlanetId,
                    id: { [require('sequelize').Op.ne]: id }
                }
            });

            if (duplicate) {
                return res.status(409).json({ error: 'This star is already linked to this planet.' });
            }

            if (parsedStarId) link.starId = parsedStarId;
            if (parsedPlanetId) link.planetId = parsedPlanetId;

            await link.save();
            return res.json(link);
        } catch (err) {
            console.error('[ERROR] Failed to update star-planet link:', err);
            return res.status(500).json({ error: 'Failed to update star-planet link' });
        }
    },

    async delete(req, res) {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id) || id <= 0) {
            return res.status(400).json({ error: 'Invalid ID for StarsPlanets' });
        }

        try {
            const link = await StarsPlanets.findByPk(id);
            if (!link) {
                return res.status(404).json({ error: 'Link not found' });
            }

            await link.destroy();
            console.log(`[DEBUG] Deleted link with ID ${id}`);
            res.status(204).end();
        } catch (err) {
            console.error('[ERROR] Failed to delete star-planet link:', err);
            res.status(500).json({ error: 'Failed to delete star-planet link' });
        }
    }
};
