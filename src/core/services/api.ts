// Third party
import { AxiosResponse } from 'axios';

// Services
import http from './http';

const fetchProducts = async (category: number | string): Promise<AxiosResponse> => {
  return http.get(`/type/${category}`);
};

export { fetchProducts };
