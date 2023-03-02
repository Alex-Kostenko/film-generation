import { Button, Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { ISelectedFilms } from '@/interfaces';

import Option from '../Checkbox';
import Stars from '../Stars';

import {
  DatePickerComponent,
  CriteriasContainer,
  SearchContainer,
  Select,
} from './style';

interface ISearchPanel {
  // propsGenres: ISelectedFilms[];
  movieRating: number;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm?: string;
}

const SearchPanel: FC<ISearchPanel> = ({
  setMovieRating,
  setSearchTerm,
  movieRating,
  searchTerm,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);

  const [resultGenres, setResultGenres] = useState<ISelectedFilms[]>([]);
  const [genres, setGenres] = useState<ISelectedFilms[]>([]);
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    if (genres.length === 0) {
      (async () => {
        const genres = await queryMovie.getGenres();
        setGenres(genres);
      })();
    }

    genres.forEach(
      (option: ISelectedFilms) => (
        (option.value = option.id),
        (option.label = option.name),
        (option.label =
          option.label &&
          option.label.charAt(0).toUpperCase() + option.label.slice(1)),
        delete option.name
      ),
    );

    setResultGenres(genres);
  }, [genres]);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setSearchGenre(selectedFilms);
  };

  const redirect = () => {
    router.push(
      `/movieList?categories=${searchGenre.map(
        (element: ISelectedFilms) => element.label,
      )}&categoriesId=${searchGenre.map(
        (element: ISelectedFilms) => element.id,
      )}&rating=${movieRating * 2}&search=${searchTerm}`,
    );
  };

  return (
    <>
      <CriteriasContainer>
        <Select
          className="selectCategory"
          placeholder={t('main.genre')}
          options={resultGenres}
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
        <Input
          label={t('main.search')}
          value={valueInput}
          onChange={(event: any) => setValueInput(event.target.value)}
          onBlur={(event: any) => setSearchTerm(event.target.value)}
        />
        <Button label={t('main.search')} onClick={redirect} />
      </SearchContainer>
    </>
  );
};

export default SearchPanel;
