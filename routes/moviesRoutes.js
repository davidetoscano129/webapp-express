const express = require('express');
const router = express.Router();

// Placeholder per le rotte Index e Show
router.get('/', (req, res) => {
    res.status(501).json({ message: 'Rotta Index non ancora implementata' });
});

router.get('/:id', (req, res) => {
    res.status(501).json({ message: 'Rotta Show non ancora implementata' });
});

module.exports = router;