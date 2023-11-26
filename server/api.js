const path = require('path');

require('dotenv').config({path:__dirname + '/../.env'});

const { Infobip, AuthType } = require('@infobip-api/sdk');

const infobip = new Infobip ({
    baseUrl: process.env.INFOBIP_BASE_URL,
    apiKey: process.env.INFOBIP_API_KEY,
    authType: AuthType.ApiKey,
})

function sendThankYouSMS(phoneNumber) {
    console.log("Function called!");
    infobip.channels.sms.send({
        messages: [
            {
                destinations: [{ to: phoneNumber }],
                from: 'Pipstop', 
                text: 'Thank you for registering!'
            }
        ]
    }).then(response => {
        console.log('SMS sent successfully:');
    }).catch(error => {
        console.error('Error sending SMS:', error);
    });
}

module.exports = {
    sendThankYouSMS
};