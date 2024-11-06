var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET Home Page (alternative route). */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET About Page. */
router.get('/about', function(req, res, next) {
  res.render('about', {  // Render 'about.ejs' instead of 'index.ejs'
    title: 'About'
  });
});

/* GET Projects Page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {  // Render 'projects.ejs' instead of 'index.ejs'
    title: 'Projects'
  });
});

/* GET Contact Page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {  // Render 'contact.ejs' instead of 'index.ejs'
    title: 'Contact Me'
  });
});

module.exports = router;
