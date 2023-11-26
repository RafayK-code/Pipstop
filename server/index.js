const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const path = require('path')
const database = require('./database')

const registerUserRouter = require('./registerUser');

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());

app.get('/api', (req, res) => {
    //Send data from database
    res.json({message: "Hello from server!"})
})

app.use(registerUserRouter);

app.listen(port, () => console.info('Listening on port', port))