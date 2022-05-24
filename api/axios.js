import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export default baseAxios;
