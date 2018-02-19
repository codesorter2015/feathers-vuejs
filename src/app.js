'use strict';

const path = require('path');
const serveStatic = require('serve-static');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const configuration = require('@feathersjs/configuration');
const socketio = require('@feathersjs/socketio');
const middleware = require('./middleware');
const services = require('./services');
const authentication = require('@feathersjs/authentication');

const app = express(feathers());

app.configure(configuration(path.join(__dirname, '..')))
  .use(compress())
  .options('*', cors())
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .configure(socketio())
  .configure(services)
  .use(require('connect-history-api-fallback')())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .configure(middleware);

module.exports = app;
