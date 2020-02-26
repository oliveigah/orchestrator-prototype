const axios = require('axios').default;

async function testService() {
    const serviceRequest1 = axios.get('http://localhost:3001/test');
    const serviceRequest2 = axios.get('http://localhost:3002/test');
    const serviceRequest3 = axios.get('http://localhost:3003/test');
    const servicesResults = await Promise.all([serviceRequest1, serviceRequest2, serviceRequest3]);
    const result = {
        service1: servicesResults[0].data,
        service2: servicesResults[1].data,
        service3: servicesResults[2].data,
    };
    return result;
}

module.exports = {
    execute: testService,
};
