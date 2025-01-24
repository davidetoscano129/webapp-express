require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const moviesRoutes = require('./routes/moviesRoutes');

app.use(express.json());
app.use('/movies', moviesRoutes);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});