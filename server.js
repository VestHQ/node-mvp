const express = require('express');
const mongoose  = require( 'mongoose' )
require('./db');
const Customer = mongoose.model('CDP')

const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/customers', (req, res) => {
  Customer.find({}, {}, { sort: { 'total_cdps' : 1 }, limit: 10 }, function(err, data) {
    res.send(data)
  })
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
