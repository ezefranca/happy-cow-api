const express = require('express');
const app = express();

var scraping = require('./scraping');

app.get('/projects/:type?', function (req, res) {
  scraping.getProjects(req.param('type')).then(function(data) {
      res.status(200).json(data);
  }, function(err) {
      res.status(400).json(err);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API running on http://%s:%s', host, port);
});
view raw