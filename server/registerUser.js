const express = require('express');
const router = express.Router();

const database = require('./database')

router.post('/register', (req, res) => {
    const userEmail = req.body.email;
    const userFname = req.body.firstName;
    const userLname = req.body.lastName;
    const userPNumber = req.body.phoneNumber;
    const userTeamName = req.body.teamName;

    database.insertUser(userEmail, userFname, userLname, userPNumber, userTeamName, (err, user) => {
        if (err) {
            const error = new Error(err.message);
            res.status(500).json({error: error.message});
        }

        else {
            res.status(200).json({email: user});
        }
    })
})

module.exports = router;