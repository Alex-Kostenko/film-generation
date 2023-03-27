import { useTranslation } from 'react-i18next';

import EmptyFilm from '../../../public/emptyFilms.svg';

import { TextEmptyFilm, WrapperEmptyFilm } from './style';

const EmptyFilms = () => {
  const { t } = useTranslation();
  return (
    <WrapperEmptyFilm>
      <EmptyFilm className="emptyFilms" aria-label="EmptyFilms" />
      <TextEmptyFilm>{t('main.emptyFilm')}</TextEmptyFilm>
    </WrapperEmptyFilm>
  );
};

export default EmptyFilms;
