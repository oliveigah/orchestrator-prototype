const axios = require('axios').default;

const testService = async () => {
  const dep = testService.dependencies()
  const service = dep.service
  const serviceRequest1 = await axios.get(service);
    
  const var = dep.var
    // const servicesResults = await Promise.all([serviceRequest1, serviceRequest2, serviceRequest3]);
    const result = serviceRequest1.data;

    // const serviceRequest1 = await axios.get('http://localhost:3001/test');
    // const serviceRequest2 = await axios.get('http://localhost:3002/test');
    // const serviceRequest3 = await axios.get('http://localhost:3003/test');
    // const result = {
    //     service1: serviceRequest1.data,
    //     service2: serviceRequest2.data,
    //     service3: serviceRequest3.data,
    // };

    return { service, result };
}

testService.dependencies = () => ({
  service: 'http://localhost:7001/test'
  var: 1,
})

module.exports = testService
