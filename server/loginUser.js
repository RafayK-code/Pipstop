const express = require('express');
const router = express.Router();

const database = require('./database')

router.post('/login', (req, res) => {
    const { email } = req.body;
    console.log(email);

    database.getUser(email, (err, user) => {
        if (err) {
            const error = new Error(err);
            console.log(error.message);
            res.status(401).send(error.message);
        }

        else {
            if (!user) {
                const error = new Error(`User with email: ${email} does not exist. Please sign up.`);
                console.log(error.message);
                res.status(401).send(error.message);
            }
            else {
                res.status(200).send(user)
            }
        }
    })
})

module.exports = router;