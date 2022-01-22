// path: /axios.config.js
// set defaults axios config for Next.js
import axios from 'axios';

// TODO: env constant URL
// TODO: Implement URL
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = false;

export default axios;
