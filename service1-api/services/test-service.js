const delay = require('../../utils/delay');

async function testService() {
    await delay(1);
    const result = {
        data: 0,
    };
    return result;
}

module.exports = {
    execute: testService,
};
