'use strict';

// const handler = require('@feathersjs/errors/handler');
// const notFound = require('./not-found-handler');
const logger = require('./logger');
const express = require('@feathersjs/express');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  // Webpack dev middleware
  if (process.env.NODE_ENV !== 'production') {
    const webpackDev = require('./webpack-dev');
    webpackDev(app);
  }

  //app.use(notFound());
  // app.use(logger(app));
  // app.use(handler());
  app.use(express.notFound());
  app.use(express.errorHandler({ logger }));
};
