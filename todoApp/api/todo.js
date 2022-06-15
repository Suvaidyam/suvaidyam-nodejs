const { Task } = require('../model/Task');
module.exports = {
    getTodo: async (req, res) => {
        // console.log('tokenData', req.user);
        let { _id } = req.user;
        try {
            let tasks = await Task.find({ user: _id });
            return res.json(tasks);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    postTodo: async (req, res) => {
        try {
            // console.log('tokenData', req.user);
            // console.log('before', req.body)
            req.body['user'] = req.user._id;
            // console.log('after', req.body)
            let task = await Task.create(req.body);// {task:"Hello"}
            return res.json(task);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}