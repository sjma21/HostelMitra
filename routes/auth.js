// // routes/auth.js

// const express = require('express');
// const passport = require('passport');
// const sendWelcomeEmail = require('../utils/mailer');  // Import the sendWelcomeEmail function
// const router = express.Router();

// // Google login route
// router.get('/auth/google', passport.authenticate('google', {
//     scope: ['profile', 'email'],
//     redirect_uri: 'http://localhost:8080/auth/google/callback'
// }));

// // Google callback route
// router.get('/auth/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/' }),
//     async (req, res) => {
//         // After successful login
//         if (req.user) {
//             // Send welcome email
//             sendWelcomeEmail(req.user.email);
//             res.redirect('/');  // Redirect to home or any page
//         }
//     }
// );

// module.exports = router;

const express = require('express');
const passport = require('passport');
const sendWelcomeEmail = require('../utils/mailer');
const router = express.Router();

// Initiate Google authentication
router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Google callback route
router.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    async (req, res) => {
        if (req.user) {
            sendWelcomeEmail(req.user.email); // Send welcome email if login is successful
            res.redirect('/'); // Redirect to homepage or dashboard
        }
    }
);

module.exports = router;

