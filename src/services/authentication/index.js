'use strict';

const authentication = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');
const jwt = require('@feathersjs/authentication-jwt');

module.exports = function () {
  const app = this;

  let config = app.get('auth');

  app.configure(authentication(config));
//   app.configure(local);
//   app.configure(jwt);
};
