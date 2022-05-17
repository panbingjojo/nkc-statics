const PATH = require('path');
import {broker} from './modules/communication';
import ApiService from 'moleculer-web';
import {InfoLog} from './modules/logger';

broker.createService({
  name: 'NKC-STATICS-SERVICE',
  mixins: [ApiService],
  settings: {
    folder: PATH.join(__dirname, ''),
    options: {},
  }
});

async function run() {
  InfoLog('Starting service...');
  await broker.start();
  InfoLog('Service started');
}

run().catch(console.error);
