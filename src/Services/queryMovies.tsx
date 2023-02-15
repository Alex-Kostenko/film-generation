import api from './config';

const queryMovie = {
  async getAllFilter() {
    try {
      const res = await api.get('/filters/all');

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export default queryMovie;
