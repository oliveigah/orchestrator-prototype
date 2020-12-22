const delay = require('../../utils/delay');

async function testService() {
  await delay(500);
  const result = [
    'phone2',
    'phone4',
  ];
  return result;
}

module.exports = {
  execute: testService,
};
