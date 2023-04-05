import { Button, Input, SelectComponent } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { ISelectedFilms, IYearRange } from '@/interfaces';
import { PALETTE } from '@/palette';
import { generateQueries } from '@/utils/common';
import { Paths } from '@/utils/paths';

import Option from '../Checkbox';
import Stars from '../Stars';
import YearRangePickerComponent from '../YearRangeComponent';

import { CriteriasContainer, SearchContainer } from './style';

interface ISearchPanel {
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
  const [yearSearch, setYearSearch] = useState<IYearRange | 'empty'>('empty');

  const toUpperCase = (str: string | undefined) => {
    return str && str.charAt(0).toUpperCase() + str.slice(1);
  };

  //TODO check
  useEffect(() => {
    (async () => {
      const genres = await queryMovie.getGenres();
      setGenres(genres);
    })();
  }, []);

  useEffect(() => {
    let genreLanguages: string;

    switch (router.locale) {
      case 'ru':
        genreLanguages = 'name';
        break;
      case 'ua':
        genreLanguages = 'name_ukr';
        break;
      default:
        genreLanguages = 'name_eng';
    }

    genres.forEach(
      (option: ISelectedFilms) => (
        (option.value = option.id),
        (option.label = toUpperCase(option[genreLanguages])),
        (option.name_eng = toUpperCase(option.name_eng)),
        (option.name_ukr = toUpperCase(option.name_ukr))
      ),
    );

    setResultGenres(genres);
  }, [genres, router.locale]);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setSearchGenre(selectedFilms);
  };

  const redirect = () => {
    const { result } = generateQueries<ISelectedFilms>(`${Paths.movieList}`, [
      { label: 'categoriesId', value: searchGenre, key: 'id' },
      { label: 'rating', value: String(movieRating) },
      { label: 'search', value: String(searchTerm) },
      {
        label: 'yearRange',
        value:
          yearSearch === 'empty'
            ? 'empty'
            : `${typeof yearSearch === 'object' && yearSearch.startYear},${
                typeof yearSearch === 'object' && yearSearch.endYear
              }`,
      },
    ]);

    router.push(result);
  };

  return (
    <>
      <CriteriasContainer>
        <SelectComponent
          instanceId="test123"
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
        <YearRangePickerComponent setYearSearch={setYearSearch} />
        <Stars
          style={{ margin: '15px', color: PALETTE.white }}
          rating={t('main.rating')}
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        />
      </CriteriasContainer>
      <SearchContainer>
        <Input
          inputType={'text'}
          label={t('main.search')}
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
          onBlur={(event) => setSearchTerm(event.target.value)}
        />
        <Button
          aria-label="search"
          value={t('main.search')}
          onClick={redirect}
        />
      </SearchContainer>
    </>
  );
};

export default SearchPanel;
