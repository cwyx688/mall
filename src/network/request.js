import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/w1/',
    baseURL: 'http://106.54.54.237:8000/api/w1/',
    timeout: 5000
  })


  instance.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
    },error => {
    // Do something with request error
    return Promise.reject(error);
    });
    
    
  instance.interceptors.response.use(config => {
    // Do something before request is sent
    return config.data;
    },error => {
    // Do something with request error
    return Promise.reject(error);
    });

    
  return instance(config)





}
