const { User } = require('../model/User');
module.exports = {
    getUser: async (req, res) => {
        try {
            let users = await User.find();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    postUser: async (req, res) => {
        try {
            let user = await User.create(req.query);// {task:"Hello"}
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}