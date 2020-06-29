const express = require('express');
const routes = express.Router();


routes.get('/', function (req, res) {
  return res.redirect('/instructors');
});

routes.get('/instructors', function (req, res) {
  return res.render('instructors/index');
});


routes.get('/menbers', function (req, res) {
  return res.send('menbers');
});


module.exports = routes;