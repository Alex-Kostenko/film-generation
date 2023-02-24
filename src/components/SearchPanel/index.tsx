import { Button, Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { ISelectedFilms, ISelectOptions, ISearchPanel } from '@/interfaces';

import Option from '../Checkbox';
import Stars from '../Stars';

import {
  DatePickerComponent,
  CriteriasContainer,
  SearchContainer,
  Select,
} from './style';

const SearchPanel: FC<ISearchPanel> = ({ movieRating, setMovieRating }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    (async () => {
      const genres = await queryMovie.getGenres();

      genres.forEach(
        (option: ISelectOptions) => (
          (option.value = option.id),
          (option.label = option.name),
          delete option.name
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
      )}&categoriesId=${searchGenre.map(
        (element: ISelectedFilms) => element.id,
      )}&rating=${movieRating * 2}`,
    );
  };
  return (
    <>
      <CriteriasContainer>
        <Select
          className="selectCategory"
          placeholder={t('main.genre')}
          options={genres}
          multi={true}
          closeMenu={false}
          checkbox={{ Option }}
          onChange={(selectedFilms: ISelectedFilms[]) =>
            changeGenre(selectedFilms)
          }
        />
        <DatePickerComponent className="datePicker" />
        <Stars movieRating={movieRating} setMovieRating={setMovieRating} />
      </CriteriasContainer>
      <SearchContainer>
        <Input label={t('main.search')} />
        <Button label={t('main.search')} onClick={redirect} />
      </SearchContainer>
    </>
  );
};

export default SearchPanel;
