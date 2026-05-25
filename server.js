// server.js - Backend for 24/7 AI Remote

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.get('/', (req, res) => {
    res.send('🚀 Bhai Ka AI Server Running!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
