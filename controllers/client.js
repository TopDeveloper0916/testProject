var _ = require('lodash');
var async = require('async');
var Client = require('../models/Client');





/**
 * GET /client
 * List of Clients.
 */

exports.getClient = function(req, res) {
  Client
  .find()
  .exec(function (err, client) {
    res.render('client', {
      title: 'Client List',
      client: client
    });
  });
};



/**
 * GET /client/add
 * Display form to add client.
**/

exports.addClient = function(req, res) {
	res.render('client/add', {
		title: 'Add Client'
	});
}



/**
 * GET /client/add
 * Display form to add client.
**/
exports.postClient = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/client/add');
  }

  var client = new Client({
  	name: req.body.name,
    email: req.body.email,
    website: req.body.website
  });

  client.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/client')
  });
};
