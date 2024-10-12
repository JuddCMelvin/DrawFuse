require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import your auth routes

const app = express();
app.use(bodyParser.json());

// Use the auth routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Backend server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
