import { IRequestBody } from '@/interfaces';

import api from './config';

const queryMovie = {
  async getAllFilter() {
    try {
      const res = await api.get('/filters/all');

      return res.data;
    } catch (error) {}
  },

  async getByID(movieId: string) {
    try {
      const res = await api.get(`/movies/get-by-id/${movieId}`);

      return res.data;
    } catch (error) {}
  },

  async getPopularMovie() {
    try {
      const res = await api.get('/movies/last-popular?moviesAmount=5');

      return res.data;
    } catch (error) {}
  },

  async pagination(
    pageSize: number,
    page: number,
    searchTerm: string,
    body: IRequestBody,
  ) {
    try {
      const res = await api.post(
        `/movies/pagination?pageSize=${pageSize}&page=${page}&searchTerm=${searchTerm}`,
        body,
      );

      return res.data;
    } catch (error) {}
  },

  async getRezka(movieId: string) {
    try {
      const res = await api.get(`/movies/find-rezka-url/${movieId}`);

      return res.data;
    } catch (error) {}
  },

  async getTrailer(movieId: string) {
    try {
      const res = await api.get(`/movies/get-trailer/${movieId}`);

      return res.data;
    } catch (error) {}
  },

  async getGenres() {
    try {
      const res = await api.get('/genres/all');

      return res.data;
    } catch (error) {}
  },

  async getAllId() {
    try {
      const res = await api.get('/movies/movies-ids');

      return res.data;
    } catch (error) {}
  },
};

export default queryMovie;
