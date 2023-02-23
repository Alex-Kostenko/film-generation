import { Button, Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { ISelectedFilms, ISelectOptions } from '@/interfaces';

import Stars from '../Stars';

import {
  DatePickerComponent,
  CriteriasContainer,
  SearchContainer,
  Select,
} from './style';

const SearchPanel = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);
  const [rating, setRating] = useState(0.5);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const genres = await queryMovie.getGenres();

      genres.forEach(
        (option: ISelectOptions) => (
          (option.value = option.id),
          (option.label = option.name),
          delete option.name,
          delete option.id
        ),
      );

      setGenres(genres);
    })();
  }, []);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setSearchGenre(selectedFilms);
  };

  const redirect = () => {
    router.push(
      `/movieList?categories=${searchGenre.map(
        (element: ISelectedFilms) => element.label,
      )}&rating=${rating * 2}`,
    );
  };
  return (
    <>
      <CriteriasContainer>
        <Select
          className="selectCategory"
          placeholder={t('main.genre')}
          onChange={(selectedFilms: ISelectedFilms[]) =>
            changeGenre(selectedFilms)
          }
          options={genres}
        />
        <DatePickerComponent className="datePicker" />
        <Stars setRating={setRating} />
      </CriteriasContainer>
      <SearchContainer>
        <Input label={t('main.search')} />
        <Button label={t('main.search')} onClick={redirect} />
      </SearchContainer>
    </>
  );
};

export default SearchPanel;
