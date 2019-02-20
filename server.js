// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
// configure instagram app with your access_token
ig.use({
// get access token here: http://instagram.pixelunion.net/
access_token: '9708622778.1677ed0.9899375be85c4ae6820e44715c7992c2',
});
// we'll get to this soon
// SET THE ROUTES
// ===================================================
// home page route - popular images
app.get('/', function(req, res) {
// use the instagram package to get popular media
ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
// render the home page and pass in the popular images
res.render('pages/index', { grams: medias });
});
});
// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');
