import { IUserBody } from '@/interfaces';
import { api } from './config';

const queryUser = {
  async getUser(id: string) {
    try {
      const res = await api.post(`/users/${id}`);

      return res.data;
    } catch (error) {}
  },

  async changeUserData(body: IUserBody) {
    try {
      const res = await api.post('/auth/register', body);

      return res.data;
    } catch (error) {}
  },
};

export default queryUser;
