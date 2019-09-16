const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


router.get('/', (req, res) => {
    db('users')
        .select('id', 'email', 'password')
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;