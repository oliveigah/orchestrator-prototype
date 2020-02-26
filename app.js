/* eslint-disable no-console */
const express = require('express');
const orchestratorTestRoute = require('./orchestrator-api/routes/test-route');
const service1TesteRoute = require('./service1-api/routes/test-route');
const service2TesteRoute = require('./service2-api/routes/test-route');
const service3TesteRoute = require('./service3-api/routes/test-route');
const config = require('./config/config');

exports.orchestratorApp = () => {
    const app = express();
    app.use(express.json());
    app.use('/test', orchestratorTestRoute);
    const port = config.ORCHESTRATOR_PORT || 3000;
    app.listen(port);
    console.log('info', `Orchestrator running on port ${port}`);
};

exports.service1App = () => {
    const app = express();
    app.use(express.json());
    app.use('/test', service1TesteRoute);
    const port = config.SERVICE1_PORT || 3001;
    app.listen(port);
    console.log('info', `Service 1 running on port ${port}`);
};

exports.service2App = () => {
    const app = express();
    app.use(express.json());
    app.use('/test', service2TesteRoute);
    const port = config.SERVICE2_PORT || 3002;
    app.listen(port);
    console.log('info', `Service 2 running on port ${port}`);
};

exports.service3App = () => {
    const app = express();
    app.use(express.json());
    app.use('/test', service3TesteRoute);
    const port = config.SERVICE3_PORT || 3003;
    app.listen(port);
    console.log('info', `Service 3 running on port ${port}`);
};
