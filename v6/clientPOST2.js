// https://attacomsian.com/blog/node-http-post-request

const axios = require('axios');

const data = {
    name: 'John Doe',
    job: 'Content Writer'
};

axios.post('https://reqres.in/api/users', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });