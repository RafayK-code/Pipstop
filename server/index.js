const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const path = require('path')
const database = require('./database')

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    //Send data from database
    res.json({message: "Hello from server!"})
})

app.post('/register', (req, res) => {
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

app.listen(port, () => console.info('Listening on port', port))