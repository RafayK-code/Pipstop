const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
require('dotenv').config({path: './api.env'});
const { Infobip } = require('@infobip-api/sdk');
const {AuthType} = require('@infobip-api/sdk');

// Setup Infobip
const infobip = new Infobip({
    baseUrl: process.env.INFOBIP_BASE_URL,
    apiKey: process.env.INFOBIP_API_KEY,
    authType: AuthType.ApiKey,
});

function sendThankYouSMS(phoneNumber) {
    infobip.channels.sms.send({
        messages: [
            {
                destinations: [{ to: phoneNumber }],
                from: 'Pipstop', 
                text: 'Thank you for registering!'
            }
        ]
    }).then(response => {
        console.log('SMS sent successfully:', response);
    }).catch(error => {
        console.error('Error sending SMS:', error);
    });
}

function sendWelcomeBackSMS(phoneNumber){
    infobip.channels.sms.send({
        messages: [
            {
                destinations: [{ to: phoneNumber }],
                from: 'Pipstop', 
                text: 'Welcome back!!'
            }
        ]
    }).then(response => {
        console.log('SMS sent successfully:', response);
    }).catch(error => {
        console.error('Error sending SMS:', error);
    });
}


const server = http.createServer((req, res) => {
   
    if (req.url === '/register' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // Convert the incoming data to a string
        });
        req.on('end', () => {
            const parsedBody = new URLSearchParams(body);
            const firstName = parsedBody.get('firstName');
            const lastName = parsedBody.get('lastName');
            const phoneNumber = parsedBody.get('phoneNumber');
            const email = parsedBody.get('email');

            sendThankYouSMS(phoneNumber);
            res.writeHead(302, { 'Location': '/index' });
            res.end();

        });
        return;
    } else if (req.url === '/login' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = new URLSearchParams(body);
            const email = parsedBody.get('email');

            const userPhoneNumber = 'sophiatong113@gmail.com';

            if (userPhoneNumber) {
                sendWelcomeBackSMS('16478017132');
                res.writeHead(302, { 'Location': '/welcome-back' }); // Redirect to a welcome back page or dashboard
            } else {
                res.writeHead(401, { 'Content-Type': 'text/html' });
                res.end('Invalid credentials');
            }
        });
        return;

    
    } else if (req.url.startsWith('/images/')) {
        const filePath = path.join(__dirname, req.url);
        const fileExt = path.extname(filePath);
        let contentType = 'text/plain';

        if (fileExt === '.svg') {
            contentType = 'image/svg+xml';
        }

        fs.readFile(filePath, (error, content) => {
            if (error) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404: File Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
        
    } else {
        // Define the file path based on the URL
        let filePath = 'register.html'; // Default file path
        let contentType = 'text/html'; // Default content type

        switch (req.url) {
            case '/style.css':
                filePath = 'style.css';
                contentType = 'text/css';
                break;
            case '/index':
                filePath = 'index.html';
                break;
            case '/health':
                filePath = 'health.html';
                break;
            case '/social':
                filePath = 'social.html';
                break;
            case '/funandgames':
                filePath = 'funandgames.html';
                break;
            case '/profile':
                filePath = 'profile.html';
                break;
            case '/leaderboard':
                filePath = 'leaderboard.html';
                break;
            case '/login':
                filePath = 'login.html';
                break;
            case '/terms':
                filePath = 'terms.html';
                break;
        }

        // Serve the file
        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('404: File Not Found');
                } else {
                    res.writeHead(500);
                    res.end(`Server Error: ${error.code}`);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

