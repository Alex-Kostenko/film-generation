import { useTranslation } from 'react-i18next';

import NoMovie from '../../../public/arrowNoMovies.svg';

import { TextNoMovies, WrapperNoMovie } from './style';

const NoMovies = () => {
  const { t } = useTranslation();
  return (
    <WrapperNoMovie>
      <NoMovie className="noMovies" aria-label="noMovies" />
      <TextNoMovies>{t('main.emptyFilm')}</TextNoMovies>
    </WrapperNoMovie>
  );
};

export default NoMovies;
