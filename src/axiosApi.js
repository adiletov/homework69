import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://homework69-66f1f.firebaseio.com'
});

export default axiosApi;
