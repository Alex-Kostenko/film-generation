import { Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { IName, ISelectedFilms } from '@/interfaces';
import { filter } from '@/utils/constants';
import { useDebounce } from '@/utils/hooks/useDebounce';

import Option from '../Checkbox';
import Stars from '../Stars';

import {
  DatePickerComponent,
  CriteriasContainer,
  Select,
  WrapperInArrowInFilter,
  TopArrow,
  LeftArrow,
  WrapperFilter,
} from './style';

interface ISearchPanel {
  // propsGenres: ISelectedFilms[];
  movieRating: number;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm?: string;
  setValueFilter?: any;
  setAscDesc?: any;
  ascDesc?: any;
}

const SearchPanel: FC<ISearchPanel> = ({
  setValueFilter,
  setSearchTerm,
  searchTerm,
  setAscDesc,
  ascDesc,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [searchGenre, setSearchGenre] = useState<ISelectedFilms[]>([]);

  const [resultGenres, setResultGenres] = useState<ISelectedFilms[]>([]);
  const [genres, setGenres] = useState<ISelectedFilms[]>([]);
  const [movieRating, setMovieRating] = useState(0.5);
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

  useEffect(() => {
    router.push(
      `/movieList?categories=${searchGenre.map(
        (element: ISelectedFilms) => element.label,
      )}&categoriesId=${searchGenre.map(
        (element: ISelectedFilms) => element.id,
      )}&rating=${movieRating * 2}&search=${searchTerm}`,
    );
  }, [searchGenre, searchTerm, movieRating]);

  const changeSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  const debounce = useDebounce(changeSearchTerm);

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
        <DatePickerComponent to={t('main.to')} className="datePicker" />
        <Input
          label={t('main.search')}
          value={valueInput}
          onChange={(event: any) => {
            debounce(event.target.value);
            setValueInput(event.target.value);
          }}
        />
        <WrapperFilter>
          <WrapperInArrowInFilter>
            <TopArrow onClick={() => setAscDesc('desc')}>
              {ascDesc === 'desc' ? <>&#9650;</> : <>&#9651;</>}
            </TopArrow>
            <LeftArrow onClick={() => setAscDesc('asc')}>
              {ascDesc === 'desc' ? <>&#9661;</> : <>&#9660;</>}
            </LeftArrow>
          </WrapperInArrowInFilter>
          <Select
            className="selectFilter"
            placeholder={t('main.filter')}
            onChange={(name: IName) => setValueFilter(name.value)}
            options={filter}
            multi={false}
            closeMenu={true}
            hideSelected={true}
          />
        </WrapperFilter>
        <Stars
          rating={t('main.rating')}
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        />
      </CriteriasContainer>
    </>
  );
};

export default SearchPanel;
