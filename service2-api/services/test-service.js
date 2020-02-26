const delay = require('../../utils/delay');

async function testService() {
    await delay(1000);
    const result = {
        hello: 'World',
    };
    return result;
}

module.exports = {
    execute: testService,
};
