import {broker} from './modules/communication';
import Configs from './modules/configs';
// import ApiService from 'moleculer-web';
import {InfoLog} from './modules/logger';

broker.createService({
  name: 'NKC-STATICS-SERVICE',
  settings: {
    port: Configs.port,
    path: 'statics',
    folder: Configs.path,
    options: {},
  }
});

async function run() {
  InfoLog('Starting service...');
  await broker.start();
  InfoLog('Service started');
}

run().catch(console.error);
