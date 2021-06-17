const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.json(data);   
});

app.post('/Plans/estimate', function(req, res) {
    data.push(req.body);
    res.end(JSON.stringify(data));
});

var data = [{
  name: 'Laptop',
  id: '2',
  amount: '50000'
}];

app.listen(8080, function() {
    console.log('Service is running');
});
