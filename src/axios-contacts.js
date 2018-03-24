import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://exam-9-web-app.firebaseio.com'
});

export default instance;