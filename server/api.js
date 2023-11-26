const path = require('path');

require('dotenv').config({path:__dirname + '../.env'});

const { Infobip, AuthType } = require('@infobip-api/sdk');

const infobip = new Infobip ({
    baseUrl: 'qyp1k2.api.infobip.com',
    apiKey: 'aadfc05fef9fa9e8327ba53a5eb65ab6-86455dbf-80b6-4c9f-bc0e-7dcd31e6e84a',
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