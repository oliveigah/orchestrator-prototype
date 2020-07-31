const delay = require('../../utils/delay');

async function testService() {
    await delay(500);
    const result = {
        data: 2,
    };
    return result;
}

module.exports = {
    execute: testService,
};
