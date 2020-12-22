const delay = require('../../utils/delay');

async function testService() {
  await delay(1000);
  const result = [
    'email1',
    'email3',
    'email6',
    'email8',
  ];
  return result;
}

module.exports = {
  execute: testService,
};
