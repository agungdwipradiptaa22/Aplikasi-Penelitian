const express = require('express');
const cors = require('cors');
const DBRoutes = require('./routes/DBRoutes');
const PenelitianRoutes = require('./routes/PenelitianRoutes');
const app = express();

// Mengaktifkan CORS
app.use(cors());

// Middleware untuk mengurai JSON
app.use(express.json());

app.use('/api',
    DBRoutes,
    PenelitianRoutes
);

module.exports = app;
