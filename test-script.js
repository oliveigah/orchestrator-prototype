const axios = require('axios');
const delay = require('./utils/delay');

const routes = [
    'http://localhost:7000/test/service1',
    'http://localhost:7000/test/service2',
    'http://localhost:7000/test/service3',
];

const main = async (t) => {
    if (t == 0) {
        const dep = main.dependencies()
        await delay(1)
        console.log(dep)
    }
    else {
        let soma = 0
        for(let i = 0; i <= 10000000; i++ ){
            soma += i
        }
        console.log(soma)
    }
}

main.dependencies = () => ({
    test: 1
})

async function execute() {
    // const resultsArray = [];
    // for (let i = 0; i <= 1000; i++) {
    //     const index = i % 3;
    //     const route = routes[index];
    //     resultsArray.push(axios.get(route));
    // }
    // const result = await Promise.all(resultsArray);
    // result.forEach((response, i) => {
    //     const routeIndex = i % 3;
    //     const success = response.data.result.data == routeIndex;
    //     console.log(`${i}: Call to ${routes[routeIndex]} | ${success} | ${response.data.service}`);
    // });

    for(let i = 0; i <= 1; i++) {
        main.dependencies = () => ({
            test: i
        })
        main(i)
    }

    
}

execute();
