const axios = require('axios').default;

const testService = async (someParameter) => {
  const dep = testService.dependencies();

  if (someParameter === 'break') {
    throw new Error('Quebrou por causa de X');
  }

  const { data: usersList } = await axios.get(dep.service1);
  const { data: emailBlackList } = await axios.get(dep.service2);
  const { data: phoneBlackList } = await axios.get(dep.service3);

  const blockedUsers = usersList.filter((user) => {
    const isMinor = user.age < 18;
    const isInvalidEmail = emailBlackList.find((blackListEmail) => blackListEmail === user.email);
    const isInvalidPhone = phoneBlackList.find((blackListPhone) => blackListPhone === user.phone);
    return isMinor || isInvalidEmail || isInvalidPhone;
  });

  return blockedUsers;
};

testService.dependencies = () => ({
  http: axios,
  service1: 'http://localhost:7001/test',
  service2: 'http://localhost:7002/test',
  service3: 'http://localhost:7003/test',
});

module.exports = testService;
