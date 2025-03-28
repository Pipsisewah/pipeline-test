const express = require('express');
const app = express();
const PORT = 8004;

app.get('/', (req, res) => {
    res.send('Hello World from Node.js on Port 8004!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));