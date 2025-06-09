const express = require('express');
const cors = require('cors');
const pool = require('./db'); // your db.js
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root test route
app.get('/', async (req, res) => {
    try {
        res.json('Course Management API is ACTIVE!');
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Tables list
const tables = [
    'Users', 'Courses', 'Enrollments', 'Modules', 'Lessons',
    'UserProgress', 'Discussions', 'Payments', 'Categories', 'Certificates'
];

// Dynamic GET routes for each table
for (const table of tables) {
    app.get(`/${table}`, async (req, res) => {
        try {
            const result = await pool.query(`SELECT * FROM ${table}`);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}

// Dynamic count routes for each table
for (const table of tables) {
    app.get(`/total${table}`, async (req, res) => {
        try {
            const result = await pool.query(`SELECT COUNT(*) FROM ${table}`);
            res.json(result.rows[0]); // returns { count: 'X' }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
