// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

const { events, getUpcomingEvents } = require('../data/events');
const { teamMembers, story } = require('../data/team');
const { contactMessages, addMessage } = require('../data/contactMessages');

router.get('/', (req, res) => {
    res.render('pages/home', { 
        title: 'Home', 
        upcomingEvents: getUpcomingEvents() 
    });
});


router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About',
        teamMembers,
        story
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
  const { name, email, subject, message } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) errors.push("Name must be at least 2 characters.");
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push("Please provide a valid email address.");
  if (!subject || subject.trim() === '') errors.push("Subject is required.");
  if (!message || message.trim().length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length > 0) {
    return res.render('pages/contact', {
      title: 'Contact',
      errors,
      oldInput: { name, email, subject, message }
    });
  }

  addMessage(name, email, subject, message, { date: new Date().toISOString() });
  console.log('Current Messages:', contactMessages);

  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou', {
        title: 'Thank You'
    });
});

router.use((req, res) => {
  res.status(404).render('pages/404', {
    title: 'Page Not Found'
  });
});

module.exports = router;
