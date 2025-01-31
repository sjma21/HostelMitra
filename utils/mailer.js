// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// const CLIENT_ID = '231860362805-jqt3jbbs7fe0umsau4q15ttjcg4tjqjq.apps.googleusercontent.com';
// const CLIENT_SECRET = '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';
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
// const REFRESH_TOKEN = '1//04udLJgGMICd-CgYIARAAGAQSNwF-L9IrLhBTj6UpvUJMZhEJccNz-rgGQO3J_OTV6E_9NSqV0rfunCe7TjMUdfsq7LknCKmiqBM';

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendWelcomeEmail(userEmail) {
//     try {
//         const accessToken = await oAuth2Client.getAccessToken();

//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: 'mishrarama31@gmail.com',
//                 clientId: CLIENT_ID,
//                 clientSecret: CLIENT_SECRET,
//                 refreshToken: REFRESH_TOKEN,
//                 accessToken: accessToken
//             }
//         });

//         const mailOptions = {
//             from: 'mishrarama31@gmail.com',
//             to: userEmail,
//             subject: 'Welcome to HostelMitra!',
//             text: 'Thank you for registering at HostelMitra!'
//         };

//         const result = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', result);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// module.exports = sendWelcomeEmail;
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendWelcomeEmail(userEmail) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'your-email@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: 'mishrarama31@gmail.com',
            to: userEmail,
            subject: 'Welcome to HostelMitra!',
            text: 'Thank you for registering at HostelMitra! We’re excited to have you onboard.'
        };

        await transporter.sendMail(mailOptions);
        console.log('Welcome email sent to:', userEmail);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
}

module.exports = sendWelcomeEmail;
