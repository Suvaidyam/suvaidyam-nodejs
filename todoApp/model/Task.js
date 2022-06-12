require('./dbConnection');

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    task: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = {
    Task: Task
};