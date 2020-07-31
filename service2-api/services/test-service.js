const delay = require('../../utils/delay');

async function testService() {
    await delay(250);
    const result = {
        data: 1,
    };
    return result;
}

module.exports = {
    execute: testService,
};
