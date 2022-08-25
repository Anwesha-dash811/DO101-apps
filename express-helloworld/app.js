var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Versionb2 Once again Good Evening !\n '+ new Date());
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

