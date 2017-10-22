var express = require('express');
var app = express();
app.get('', function (req, res) {
  res.send('Minimal demo application');
});
app.listen(33333, function () {
  console.log('Example app listening on port 33333!');
});
