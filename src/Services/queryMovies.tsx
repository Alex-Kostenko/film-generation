import api from './config';

const queryMovie = {
  async getAllFilter() {
    try {
      const res = await api.get('/filters/all');

      return res.data;
    } catch (error) {}
  },

  async getPopularMovie() {
    try {
      const res = await api.get('/movies/last-popular?moviesAmount=5');

      return res.data;
    } catch (error) {}
  },
};

export default queryMovie;
