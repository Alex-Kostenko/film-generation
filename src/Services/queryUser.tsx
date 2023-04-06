import { IPasswordBody, IUserBody } from '@/interfaces';
import { notify } from '@/utils/genres';

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
      const res = await api.patch('/users/update-user', body);

      return res.data;
    } catch (error: any) {
      notify(error.response.data.message[0]);
    }
  },

  async changeUserPassword(body: IPasswordBody) {
    try {
      const res = await api.patch('/users/change-password', body);

      return res.data;
    } catch (error: any) {
      notify(error.response.data.message[0]);
    }
  },
};

export default queryUser;
