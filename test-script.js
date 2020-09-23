const axios = require('axios');

const routes = [
  'http://localhost:7000/test/service1',
  'http://localhost:7000/test/service2',
  'http://localhost:7000/test/service3',
];

async function execute() {
  const resultsArray = [];
  for (let i = 0; i <= 1000; i++) {
    const index = i % 3;
    const route = routes[index];
    resultsArray.push(axios.get(route));
  }
  const result = await Promise.all(resultsArray);
  result.forEach((response, i) => {
    const routeIndex = i % 3;
    const success = response.data.result.data == routeIndex;
    console.log(
      `${i}: Call to ${routes[routeIndex]} | ${success} | ${response.data.service}`,
    );
  });
}

execute();
