const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/media', express.static(__dirname + 'server/public/media'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html')
})

app.post('/', (req, res) => {

})

app.listen(port, () => console.info('Listening on port', port))