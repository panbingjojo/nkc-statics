import {ServiceBroker} from 'moleculer';

export const broker = new ServiceBroker({
  nodeID: `NKC-STATICS-${process.pid.toString()}`,
  transporter: 'TCP',
  registry: {
    strategy: 'Random',
    discoverer: 'Local',
  },
});
