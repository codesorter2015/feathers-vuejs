import Feathers from '@feathersjs/feathers';

import authentication from '@feathersjs/authentication-client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

// Configure Feathers client
const socket = io(process.env.FEATHERS_HOST || 'http://localhost:3030');
const feathers = Feathers()
  .configure(socketio(socket))
  .configure(authentication({storage: window.localStorage}));

import Vue from 'vue';
import VueFeathers from 'vue-feathers';
Vue.use(VueFeathers, feathers);

export default feathers;
