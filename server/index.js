const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
    res.json({message: "Hello from server!"})
})

app.post('/', (req, res) => {

})

app.listen(port, () => console.info('Listening on port', port))