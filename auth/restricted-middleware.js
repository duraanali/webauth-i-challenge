const bcrypt = require('bcrypt');

const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
    let { email, password } = req.headers;

    Users.findBy({ email })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                next();
            } else {
                res.status(401).json({ message: 'You cannot pass!' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

function fetch() {
    const reqOptions = {
        headers: {
            email: '',
            password: '',
        },
    };

}
