import { toast } from 'react-toastify';

export enum Genres {
  action = 28,
  western = 37,
  military = 10752,
  detective = 9648,
  documentary = 99,
  drama = 18,
  history = 36,
  comedy = 35,
  crime = 80,
  melodrama = 10749,
  music = 10402,
  cartoon = 16,
  adventures = 12,
  family = 10751,
  television = 10770,
  thriller = 53,
  horror = 27,
  fantastic = 878,
  fantasy = 14,
}

export enum Sort {
  asc = 'asc',
  desc = 'desc',
}

export const notify = () =>
  toast.error('🦄 УПС ХАЛЕПКА', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
