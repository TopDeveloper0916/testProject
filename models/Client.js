var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  website: String
}, { timestamps: true });

var Client = mongoose.model('Client', clientSchema);

module.exports = Client;