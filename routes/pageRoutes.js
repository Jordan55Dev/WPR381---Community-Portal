// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const events = require('../data/events');
const team = require('../data/team');
const { addMessage } = require('../data/contactMessages');

router.get('/', (req, res) => {
    res.render('pages/home', { upcomingEvents: events.slice(0, 2) });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { team });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events });
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  addMessage({ name, email, message, date: new Date().toISOString() });
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;
