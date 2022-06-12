const { Task } = require('../model/Task');
module.exports = {
    getTodo: async (req, res) => {
        try {
            let tasks = await Task.find();
            return res.json(tasks);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    postTodo: async (req, res) => {
        try {
            let task = await Task.create(req.query);// {task:"Hello"}
            return res.json(task);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}