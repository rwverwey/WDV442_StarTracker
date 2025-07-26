require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// ===============================
// View Engine Setup
// ===============================
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===============================
// Middleware
// ===============================
app.use(express.json());                                
app.use(express.urlencoded({ extended: true }));        
app.use(methodOverride('_method'));                     
app.use(express.static(path.join(__dirname, 'public'))); 

// ===============================
// Homepage Route
// ===============================
app.get('/', (req, res) => {
  res.render('home'); // renders views/home.ejs
});

// ===============================
// API Routes (JSON only)
// ===============================
const galaxyRoutes = require('./routes/galaxyRoutes');
const starRoutes = require('./routes/starRoutes');
const planetRoutes = require('./routes/planetRoutes');
const starsPlanetsRoutes = require('./routes/starsPlanetsRoutes');

app.use('/galaxies', galaxyRoutes);
app.use('/stars', starRoutes);
app.use('/planets', planetRoutes);
app.use('/starsplanets', starsPlanetsRoutes);

// ===============================
// UI Routes (HTML views)
// ===============================
const galaxyUIRoutes = require('./routes/galaxyUIRoutes');
const starUIRoutes = require('./routes/starUIRoutes');
const planetUIRoutes = require('./routes/planetUIRoutes');

app.use('/galaxies-ui', galaxyUIRoutes);
app.use('/stars-ui', starUIRoutes);
app.use('/planets-ui', planetUIRoutes);

// ===============================
// Start Server
// ===============================
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
