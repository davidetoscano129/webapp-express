const notFound = (req, res, next) => {
    res.status(404).json({ error: 'La rotta richiesta non esiste' });
};

module.exports = notFound;