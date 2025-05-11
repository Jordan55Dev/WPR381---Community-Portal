// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const events = require('../data/events');
const { getUpcomingEvents } = require('../data/events');
const team = require('../data/team');
const { addMessage } = require('../data/contactMessages');

router.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home', 
        upcomingEvents: getUpcomingEvents() 
    });
});


router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        team 
    });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { 
        title: 'Events',
        events 
    });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact'
    });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  addMessage({ name, email, message, date: new Date().toISOString() });
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', {
        title: 'Thank You'
    });
});

module.exports = router;
