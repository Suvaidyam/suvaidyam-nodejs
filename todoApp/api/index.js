const express = require('express');
const router = express.Router();

const todo = require('./todo');
router.get('/todo', todo.getTodo);
router.post('/todo', todo.postTodo);


const user = require('./user');
router.get('/user', user.getUser);
router.post('/user', user.postUser);

module.exports = router;

/**
 * MongoDB
 *  - Collections (is equivalent to tables in SQL)
 *     - Documents (is equivalent to rows in SQL)
 *      - Fields (is equivalent to columns in SQL)
 *
 */