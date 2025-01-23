const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/movies', (req, res) => {
    res.status(501).json({ message: 'Route non ancora implementata' });
});

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});