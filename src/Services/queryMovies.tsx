import api from './config';

const queryMovie = {
  async getAllFilter() {
    try {
      const res = await api.get('/filters/all');

      return res.data;
    } catch (error) {}
  },
  async pagination(pageSize: number, page: number, body: any) {
    try {
      const res = await api.post(
        `/movies/pagination?pageSize=${pageSize}&page=${page}`,
        body,
      );

      return res.data;
    } catch (error) {}
  },
};

export default queryMovie;
