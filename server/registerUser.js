const express = require('express');
const router = express.Router();

const database = require('./database');
const api = require('./api');

router.post('/register', (req, res) => {
    const { email, firstName, lastName, phoneNumber, teamName } = req.body;

    database.insertUser(email, firstName, lastName, phoneNumber, teamName, (err, user) => {
        if (err) {
            const error = new Error(err);
            console.log(error.message);
            res.status(401).send(error.message);
        }

        else {
            api.sendThankYouSMS(phoneNumber);
            res.status(200).send(user);
        }
    })
})

module.exports = router;