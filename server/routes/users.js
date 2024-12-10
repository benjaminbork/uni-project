const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');





router.post('/signup', async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log('Received signup request:', req.body);


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({username, password: hashedPassword});
        await user.save();

        //Sign up successfully response
        res.json({
            message: 'User created successfully',
            userId: user._id,
            username: user.username
        });
    }catch (err) {
        console.error('Error during user creation:', err);
        res.status(500).send('An error occurred');
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, 'secret_key');
    //Log in successfully response
    res.send({ token, userId: user._id, username: user.username});
});

module.exports = router;