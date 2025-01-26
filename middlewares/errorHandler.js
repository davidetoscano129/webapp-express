const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Errore interno del server' });
};

module.exports = errorHandler;