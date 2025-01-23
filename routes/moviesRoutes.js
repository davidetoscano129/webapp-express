const express = require('express');
const router = express.Router();
const db = require('../data/db');

// Rotta Index (lista film)
router.get('/', (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Errore durante la query al database' });
        res.json(results);
    });
});

// Rotta Show (dettagli film e recensioni)
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const movieSql = 'SELECT * FROM movies WHERE id = ?';
    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    // Ottieni il film
    db.query(movieSql, [id], (err, movieResults) => {
        if (err) return res.status(500).json({ error: 'Errore durante la query al database' });
        if (movieResults.length === 0) return res.status(404).json({ error: 'Film non trovato' });

        const movie = movieResults[0];

        // Ottieni le recensioni
        db.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ error: 'Errore durante la query al database' });

            movie.reviews = reviewsResults; // Aggiungi le recensioni al film
            res.json(movie);
        });
    });
});

module.exports = router;