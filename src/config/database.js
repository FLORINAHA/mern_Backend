require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false); 

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('Connection error:', error);
  process.exit(1);
});
database.once('open', function () {
  console.log('Connected to MongoDB');
});

module.exports = database;
