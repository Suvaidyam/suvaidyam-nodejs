const express = require('express');
const router = express.Router();

// const todoGet = require('./get');
// router.get('/todo', todoGet)

// const todoPost = require('./post');
// router.post('/todo', todoPost)

const todo = require('./todo');

router.get('/todo', todo.getTodo);
router.post('/todo', todo.postTodo);

module.exports = router;

/**
 * MongoDB
 *  - Collections (is equivalent to tables in SQL)
 *     - Documents (is equivalent to rows in SQL)
 *      - Fields (is equivalent to columns in SQL)
 *
 */