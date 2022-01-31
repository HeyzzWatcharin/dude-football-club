import axios from 'axios';

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,

    timeout: 100 * 1000,

    // *************************************************************
    // Note: Just Change Key Token here.
    // *************************************************************
    headers: {
        'X-Auth-Token': 'bb428dd4f10548debe25e5f71454529e'
    },
    withCredentials: false,
});

export default client;
