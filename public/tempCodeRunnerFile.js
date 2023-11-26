const http = require('http');
const fs = require('fs');
const querystring = require('querystring'); // Needed to parse POST data
const port = 3000;

let userData = {};

const server = http.createServer(function(req, res) {
    if (req.method === 'POST' && req.url === '/register') {
        // Handle form submission
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const postData = querystring.parse(body);
            // Add data to userData dictionary
            userData[postData.email] = postData;
            console.log(userData);

            // Redirect or send a response
            res.writeHead(302, { 'Location': '/index' });
            res.end();
        });
    } else {
        // Existing code for serving files
        let filePath = 'register.html';  
        let contentType = 'text/html';

       // Check for CSS file request
    if (req.url === '/style.css') {
        filePath = 'style.css';
        contentType = 'text/css'; // Set the content type for CSS
    } else {
        // Handling other HTML file requests
        if (req.url === '/index') {
            filePath = 'index.html';
        } else if (req.url === '/health') {
            filePath = 'health.html';
        } else if (req.url === '/social') {
            filePath = 'social.html';
        } else if (req.url === '/funandgames') {
            filePath = 'funandgames.html';
        } else if (req.url === '/profile') {
            filePath = 'profile.html';
        } else if (req.url === '/leaderboard') {
            filePath = 'leaderboard.html';
        }
    }

        // Set the response header
        res.writeHead(200, { 'Content-Type': contentType });

        // Read and serve the requested file
        fs.readFile(filePath, function(error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
