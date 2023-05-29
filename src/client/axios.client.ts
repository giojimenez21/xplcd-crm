import axios from 'axios';

const URL = 'http://localhost:4000';

export const axiosInstance = axios.create({
  baseURL: URL,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    // Valida que haya headers y, en caso de que si, agrega el token
    if (config.headers) {
      try {
        const token = JSON.parse(localStorage.getItem('token') || '');
        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.log(error);
      }
    }

    return config;
  },
  (error) => {
    // Si hay un error al hacer la peticion, lo marca en la consola y muestra un toast
    return console.error(error);
  }
);
