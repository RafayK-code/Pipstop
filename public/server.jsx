const http = require('http');
const https = require('https'); 
const fs = require('fs')
const port = 3000;
import './style.css';

const server = http.createServer(function(req, res) {
    let filePath = 'register.html';  

    if (req.url === '/index') {
        filePath = 'index.html';
    }
    if (req.url === '/health') {
        filePath = 'health.html';
    }
    if (req.url === '/social') {
        filePath = 'social.html';
    }
    if (req.url === '/funandgames') {
        filePath = 'funandgames.html';
    }
    if (req.url === '/profile') {
        filePath = 'profile.html';
    }
    if (req.url === '/leaderboard') {
        filePath = 'leaderboard.html';
    }


    
    res.writeHead(200, { 'Content-Type': 'text/html' });

    
    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
