'use strict';

const service = require('feathers-mongoose');
const user = require('./user-model');
const hooks = require('./hooks');

module.exports = function () {
  const app = this;

  const options = {
    Model: user,
    paginate: {
      default: 5,
      max: 25
    },
    lean: true
  };

  // Initialize our service with any options it requires
  app.use('/users', service(options));

  // Get our initialize service to that we can bind hooks
  const userService = app.service('/users');

  // Set up our user hooks
  userService.hooks({
    before: hooks.before,
    after: hooks.after
  });

};
