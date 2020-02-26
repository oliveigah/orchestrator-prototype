require('dotenv').config({ path: './config/.env' });

module.exports = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    ORCHESTRATOR_PORT: process.env.ORCHESTRATOR_PORT,
    SERVICE1_PORT: process.env.SERVICE1_PORT,
    SERVICE2_PORT: process.env.SERVICE2_PORT,
    SERVICE3_PORT: process.env.SERVICE3_PORT,
};
