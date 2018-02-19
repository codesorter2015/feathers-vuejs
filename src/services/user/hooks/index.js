'use strict';

// const globalHooks = require('../../../hooks');
const { authenticate } = require('@feathersjs/authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

exports.before = {
  all: [],
  find: [
    authenticate('jwt')
  ],
  get: [
    authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' })
  ],
  create: [
    hashPassword()
  ],
  update: [
    authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' })
  ],
  patch: [
    authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' })
  ],
  remove: [
    authenticate('jwt'),
    restrictToOwner({ ownerField: '_id' })
  ]
};

exports.after = {
  all: [protect('password')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
