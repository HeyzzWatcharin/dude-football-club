import axios from 'axios';

const client = axios.create({
    baseURL: 'http://api.football-data.org',

    timeout: 100 * 1000,

    headers: {
        'X-Auth-Token': 'bb428dd4f10548debe25e5f71454529e'
    },
    withCredentials: false,
});

export default client;
