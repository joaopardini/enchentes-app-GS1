import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.0.100:8080' // Troque pelo seu IP na rede local
});