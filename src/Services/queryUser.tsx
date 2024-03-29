import { IPasswordBody, IUserBody } from '@/interfaces';
import { notify, notifySuccess } from '@/utils/genres';

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

      notifySuccess('you have successfully changed  data');
      return res.data;
    } catch (error: any) {
      notify(error.response.data.message[0]);
    }
  },

  async changeUserPassword(body: IPasswordBody) {
    try {
      const res = await api.patch('/users/change-password', body);

      notifySuccess('you have successfully changed  password');
      return res.data;
    } catch (error: any) {
      notify(
        Array.isArray(error.response.data.message)
          ? error.response.data.message[0]
          : error.response.data.message,
      );
    }
  },
};

export default queryUser;
