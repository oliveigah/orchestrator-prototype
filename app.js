/* eslint-disable no-console */
const express = require('express');
const testRoute = require('./api/routes/test-route');

module.exports = () => {
    const app = express();
    app.use(express.json());
    app.use('/test', testRoute);
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log('info', `Server running on port ${port}`);
};
