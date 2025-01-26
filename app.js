const express = require('express');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');


const app = express();
const port = process.env.PORT || 4000;

const moviesRoutes = require('./routes/moviesRoutes');


app.use(express.json());
app.use('/movies', moviesRoutes);
app.use('/images', express.static('public/movies_cover'));

// Middleware per rotte inesistenti
app.use(notFound);

// Middleware per gestione errori
app.use(errorHandler);

// Logger solo per le rotte dei film
app.use('/movies', logger, moviesRoutes);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});