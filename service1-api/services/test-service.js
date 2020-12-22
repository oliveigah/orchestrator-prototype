const delay = require('../../utils/delay');

async function testService() {
  await delay(50);
  const result = [
    {
      id: 1,
      name: 'user 1',
      age: 18,
      email: 'email1',
      phone: 'phone1',
    },
    {
      id: 2,
      name: 'user 2',
      age: 10,
      email: 'email2',
      phone: 'phone2',
    },
    {
      id: 3,
      name: 'user 3',
      age: 23,
      email: 'email3',
      phone: 'phone3',
    },
    {
      id: 4,
      name: 'user 4',
      age: 14,
      email: 'email4',
      phone: 'phone4',
    },
    {
      id: 5,
      name: 'user 5',
      age: 45,
      email: 'email5',
      phone: 'phone5',
    },
    {
      id: 6,
      name: 'user 6',
      age: 36,
      email: 'email6',
      phone: 'phone6',
    },
    {
      id: 7,
      name: 'user 7',
      age: 17,
      email: 'email7',
      phone: 'phone7',
    },
    {
      id: 8,
      name: 'user 8',
      age: 48,
      email: 'email8',
      phone: 'phone8',
    },
    {
      id: 9,
      name: 'user 9',
      age: 49,
      email: 'email9',
      phone: 'phone9',
    },
    {
      id: 0,
      name: 'user 0',
      age: 10,
      email: 'email0',
      phone: 'phone0',
    },
  ];
  return result;
}

module.exports = {
  execute: testService,
};
