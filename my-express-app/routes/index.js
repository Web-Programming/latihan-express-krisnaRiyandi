var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about us. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET contact. */
router.get("/contact", function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

// Route to handle form submission
router.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    // Handle the form data (e.g., save to database, send an email, etc.)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Redirect or send a response
    res.render('thank-you', {title: 'Thank You', name : name}); 
});
module.exports = router;
