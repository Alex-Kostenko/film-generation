import { Input } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import queryMovie from '@/Services/queryMovies';
import { IName, ISelectedFilms } from '@/interfaces';
import { filter } from '@/utils/constants';
import { useDebounce } from '@/utils/hooks/useDebounce';

import Option from '../Checkbox';
import Stars from '../Stars';

import {
  WrapperInArrowInFilter,
  DatePickerComponent,
  CriteriasContainer,
  WrapperFilter,
  LeftArrow,
  TopArrow,
  Select,
} from './style';

interface ISearchPanel {
  setArrayCategoriesId: React.Dispatch<React.SetStateAction<string[]>>;
  setArrayGenres: React.Dispatch<React.SetStateAction<string[]>>;
  setValueFilter: React.Dispatch<React.SetStateAction<string>>;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setAscDesc: React.Dispatch<React.SetStateAction<string>>;
  arrayCategoriesId: string[];
  arrayGenres: string[];
  movieRating: number;
  searchTerm: string;
  ascDesc: string;
}

const SearchPanel: FC<ISearchPanel> = ({
  setArrayCategoriesId,
  arrayCategoriesId,
  setMovieRating,
  setValueFilter,
  setSearchTerm,
  movieRating,
  searchTerm,
  setAscDesc,
  ascDesc,
}) => {
  const router = useRouter();
  const { t } = useTranslation();

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

    const toUpperCase = (str: string | undefined) => {
      return str && str.charAt(0).toUpperCase() + str.slice(1);
    };

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
        (option.label = option[genreLanguages]),
        (option.label = toUpperCase(option.label)),
        (option.name_eng = toUpperCase(option.name_eng)),
        (option.name_ukr = toUpperCase(option.name_ukr)),
        delete option[genreLanguages]
      ),
    );

    setResultGenres(genres);
  }, [genres, router.locale]);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setArrayCategoriesId(selectedFilms.map((item) => String(item.id)));
  };
  const changeSearchTerm = (text: string) => {
    setSearchTerm(text);
  };

  const debounce = useDebounce(changeSearchTerm);

  useEffect(() => {
    function handlePushWithoutRender() {
      router.push(
        {
          pathname: '/movieList',
          query: {
            rating: `${movieRating}`,
            search: `${searchTerm}`,
            categoriesId: `${arrayCategoriesId && arrayCategoriesId.join(',')}`,
          },
        },
        undefined,
        { shallow: true },
      );
    }
    handlePushWithoutRender();
  }, [movieRating, searchTerm, arrayCategoriesId]);

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
          defaultValue={'SODADA'}
          label={t('main.search')}
          value={valueInput}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
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
