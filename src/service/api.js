import axios from 'axios';
const url = 'http://la:3000/v1/'

export default () => axios.create({
    baseURL: url,
});
  