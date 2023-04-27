const axios = require('axios');

const apiUrl = 'https://api.github.com';
const owner = 'mouredev';
const repo = 'retos-programacion-2023';
const endpoint = `/repos/${owner}/${repo}/commits`;

axios.get(apiUrl + endpoint, { params: { per_page: 10 } })
    .then(response => {
        response.data.forEach(commit => {
            console.log(`Hash: ${commit.sha}`);
            console.log(`Autor: ${commit.commit.author.name}`);
            console.log(`Mensaje: ${commit.commit.message}`);
            console.log(`Fecha y hora: ${commit.commit.author.date}`);
            console.log('------------------------------------------------------------');
        });
    })
    .catch(error => console.log(error));