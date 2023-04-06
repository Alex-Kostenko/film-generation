import { ILoginBody, IUserBody } from '@/interfaces';
import { notify } from '@/utils/genres';

import { api } from './config';

const queryAuthorization = {
  async login(body: ILoginBody) {
    try {
      const res = await api.post('/auth/login', body);

      return res.data;
    } catch (error: any) {
      notify(error.response.data.message[0]);
    }
  },

  async register(body: IUserBody) {
    try {
      const res = await api.post('/auth/register', body);

      return res.data;
    } catch (error) {}
  },

  async getProfileData() {
    try {
      const res = await api.get('/auth/profile');

      return res.data;
    } catch (error) {}
  },

  async logout() {
    try {
      const res = await api.get('/auth/logout');

      return res.data;
    } catch (error) {}
  },
};

export default queryAuthorization;
