const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


router.post('/', (req, res) => {
    const postData = req.body;

    db('users')
        .insert(postData, 'email', 'password')
        .then(([email, password]) => {
            db('cars')
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

router.put('/:id', (req, res) => {
    const changes = req.body;
    db('users')
        .where('id', req.params.id)
        .update(changes)
        .then(count => {
            res.status(200).json({ message: `updated ${count} record` });
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {

    db('users')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json({ message: `deleted ${count} records` });
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;