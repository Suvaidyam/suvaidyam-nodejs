const { User } = require('../model/User');
const JWT = require('jsonwebtoken');
const JWT_SECRET = 'xydfskhdkskdjldjsjbdkjsdlk';
module.exports = {
    register: async (req, res) => {
        try {
            let { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: 'Bad Request: username and password are required' });
            }
            let user = await User.findOne({ username });
            if (user) {
                return res.status(400).json({ message: 'Duplicate username' });
            } else {
                user = await User.create(req.body);
                return res.status(200).json({ message: 'user successfully created.', user: user });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            let { username, password } = req.body;
            // let username = req.body.username;
            // let password = req.body.password;

            // { username: username, password: password }
            // { username, password }

            if (!username || !password) {
                return res.status(400).json({ message: 'Bad Request: username and password are required' });
            }
            let user = await User.findOne({ username, password });

            if (user) {
                let token = JWT.sign({ _id: user._id, username: user.username }, JWT_SECRET);
                return res.json({
                    message: 'Login Successful',
                    token: token
                });
            } else {
                return res.status(400).json({ message: 'Bad Request: username and password are incorrect' });
            }
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    veryToken: async (req, res, next) => {
        try {
            // console.log('veryToken');
            let { token } = req.headers;
            // console.log('veryToken', token);
            if (token) {
                let decoded = JWT.verify(token, JWT_SECRET);
                // console.log('veryToken', decoded);
                req.user = decoded;
                next();
            } else {
                return res.status(401).json({ message: 'Unauthorized: token required' });
            }
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
    },
    logout: async (req, res) => {
        try {
            let user = await User.create(req.query);// {task:"Hello"}
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}