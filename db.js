var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Customer = new Schema(
{
  firstName: String,
  lastName: String,
  employerId: Number
});

mongoose.model('Customer', Customer);
module.exports.Customer = mongoose.model('Customer');


if (process.env.NODE_ENV === 'dev') {
  mongoose.connect('mongodb://vest:' + process.env.VEST_MONGO_PASSWORD + '@ds115071.mlab.com:15071/vest-mvp')
} else {
  mongoose.connect( 'mongodb://localhost/vest-mvp' );
  mongoose.set('debug', true);
}