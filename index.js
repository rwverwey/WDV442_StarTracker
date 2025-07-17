require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Root test route
app.get('/', (req, res) => res.send('Star Tracker API is running'));

// Route imports
const galaxyRoutes = require('./routes/galaxyRoutes');
const starRoutes = require('./routes/starRoutes');
const planetRoutes = require('./routes/planetRoutes');
const starsPlanetsRoutes = require('./routes/starsPlanetsRoutes'); 

// Mount routes
app.use('/galaxies', galaxyRoutes);
app.use('/stars', starRoutes);
app.use('/planets', planetRoutes);
app.use('/starsplanets', starsPlanetsRoutes); 

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
