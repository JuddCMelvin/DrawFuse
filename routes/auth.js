const router = require('express').Router();
const { User } = require('../models'); // Sequelize User model
const bcrypt = require('bcrypt');

// Sign up route
router.post('/signup', async (req, res) => {
    try {
        const { password, firstName, lastName, email } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password and create the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            passwordDigest: hashedPassword
        });

        res.status(201).json({ message: 'User created', user: { firstName, lastName, email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
