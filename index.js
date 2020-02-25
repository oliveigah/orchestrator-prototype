/* eslint-disable no-console */
const cluster = require('cluster');
const os = require('os');
const config = require('./config/config');
const runExpressServer = require('./app');

console.log('info', `ENVIRONMENT: ${config.ENVIRONMENT}`);
if (config.ENVIRONMENT === 'DEVELOPMENT') runExpressServer();
else {
    if (cluster.isMaster) {
        const cpuCount = os.cpus().length;
        for (let j = 0; j < cpuCount; j++) {
            cluster.fork();
        }
    } else {
        runExpressServer();
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.id} died'`);
        console.log('Staring a new one...');
        cluster.fork();
    });
}
