import api from '@/api/config';

const queryMovie = {
  async getAllFilter() {
    try {
      const res = await api.get('/filters/all');
      console.log('RES>>>', res);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default queryMovie;
