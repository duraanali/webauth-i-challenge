const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


router.post('/', (req, res) => {
    const postData = req.body;

    db('users')
        .insert(postData, 'email', 'password')
        .then(([email, password]) => {
            db('users')
                .where({ email, password })
                .first()
                .then(users => {
                    res.status(200).json(users);
                });
        })
        .catch(err => {
            res.json(err);
        });
});




module.exports = router;