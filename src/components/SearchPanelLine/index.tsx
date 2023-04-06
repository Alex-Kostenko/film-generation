import { Input, SelectComponent } from 'alex-unicode';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Dropdown from 'rc-dropdown';
import { Item as MenuItem } from 'rc-menu';
import { ChangeEvent, FC, SetStateAction, useEffect, useState } from 'react';
import Switch from 'react-switch';
import 'rc-dropdown/assets/index.css';

import queryMovie from '@/Services/queryMovies';
import {
  ISelectedFilms,
  IYearRange,
  LangGenre,
  IFilter,
  IName,
  IQuery,
} from '@/interfaces';
import { PALETTE } from '@/palette';
import { toUpperCase } from '@/utils/constants';
import { Sort } from '@/utils/genres';
import { useDebounce } from '@/utils/hooks/useDebounce';
import { Paths } from '@/utils/paths';

import Option from '../Checkbox';
import Stars from '../Stars';
import YearRangePickerComponent from '../YearRangeComponent';

import {
  WrapperInArrowInFilter,
  CriteriasContainer,
  WrapperFilter,
  LeftArrow,
  TopArrow,
  Root,
  MenuFilter,
} from './style';

interface ISearchPanel {
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedFilms[]>>;
  setYearMovie: React.Dispatch<React.SetStateAction<'empty' | IYearRange>>;
  setArrayCategoriesId: React.Dispatch<
    React.SetStateAction<(string | undefined)[]>
  >;
  setMovieRating: React.Dispatch<React.SetStateAction<number>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setValueSort: React.Dispatch<React.SetStateAction<string>>;
  setChecked: React.Dispatch<React.SetStateAction<IFilter>>;
  setAscDesc: React.Dispatch<React.SetStateAction<string>>;
  selectedOptions: ISelectedFilms[];
  yearMovie: IYearRange | 'empty';
  arrayCategoriesId: string[];
  arrayGenres: string[];
  movieRating: number;
  searchTerm: string;
  valueSort: string;
  inputValue: string;
  checked: IFilter;
  ascDesc: string;
  curPage: number;
  query: IQuery;
  setQuery: React.Dispatch<
    SetStateAction<{
      currentPage: number;
      count: number;
      arrowUpload: boolean;
      isLoading: boolean;
      pageSize: number;
    }>
  >;
}

const SearchPanel: FC<ISearchPanel> = ({
  setArrayCategoriesId,
  setSelectedOptions,
  arrayCategoriesId,
  selectedOptions,
  setMovieRating,
  setInputValue,
  setSearchTerm,
  setYearMovie,
  setValueSort,
  movieRating,
  searchTerm,
  setAscDesc,
  setChecked,
  inputValue,
  yearMovie,
  valueSort,
  ascDesc,
  checked,
  curPage,
  query,
  setQuery,
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [resultGenres, setResultGenres] = useState<IName[]>([]);
  const [genres, setGenres] = useState<LangGenre[]>([]);

  const filter = [
    { value: 'popularity', label: t('filter.popularity') },
    { value: 'release_date', label: t('filter.release_date') },
    { value: 'vote_average', label: t('filter.vote_average') },
    { value: 'title', label: t('filter.title') },
  ];

  useEffect(() => {
    if (genres?.length === 0) {
      (async () => {
        const genres = await queryMovie.getGenres();

        setGenres(genres);
      })();
    }
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

    setResultGenres(
      genres.map((option: LangGenre) => {
        return {
          value: String(option.id),
          label: toUpperCase(
            String(option[genreLanguages as keyof typeof option]),
          ),
        };
      }),
    );
  }, [genres, router.locale]);

  const changeGenre = (selectedFilms: ISelectedFilms[]) => {
    setQuery({ ...query, currentPage: 0 });
    setArrayCategoriesId(selectedFilms.map((item) => item.value));
    setSelectedOptions(selectedFilms);
  };

  const debouncedValue = useDebounce<string>(inputValue, 700);

  const changeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery({ ...query, currentPage: 0 });
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  useEffect(() => {
    router.push(
      {
        pathname: `${Paths.movieList}`,
        query: {
          rating: `${movieRating}`,
          search: `${searchTerm}`,
          categoriesId: `${arrayCategoriesId && arrayCategoriesId.join(',')}`,
          yearRange:
            yearMovie === 'empty'
              ? 'empty'
              : `${typeof yearMovie === 'object' && yearMovie.startYear},${
                  typeof yearMovie === 'object' && yearMovie.endYear
                }`,
          checkedAdult: checked.checkedAdult,
          checkedSearchInDesc: checked.checkedSearchInDesc,
          sorting: `${valueSort}`,
          ascDescc: ascDesc,
          curPage: curPage,
          pageSize: query.pageSize,
        },
      },
      undefined,
      { shallow: true },
    );
  }, [
    movieRating,
    searchTerm,
    arrayCategoriesId,
    yearMovie,
    checked,
    valueSort,
    curPage,
    ascDesc,
    query.pageSize,
  ]);

  const handleChange = (check: boolean, valueIsCheked: string) => {
    setQuery({ ...query, currentPage: 0 });
    setChecked({ ...checked, [valueIsCheked]: check });
  };

  const menuItem = [
    { name: t('filter.adult'), params: 'checkedAdult' },
    { name: t('filter.description'), params: 'checkedSearchInDesc' },
  ];

  const menu = (
    <MenuFilter>
      {menuItem.map((switchInfo, index) => (
        <MenuItem key={index + 1}>
          <label className="labelFilter">
            <p className="textFilter">{switchInfo.name}</p>

            <Switch
              offColor={PALETTE.dark.darkGrey}
              onColor={PALETTE.crimson.middle}
              uncheckedIcon={false}
              checkedIcon={false}
              height={22}
              width={33}
              activeBoxShadow={`0 0 2px 3px ${PALETTE.crimson.middle}`}
              onChange={(check) => handleChange(check, switchInfo.params)}
              checked={checked.checkedAdult}
            />
          </label>
        </MenuItem>
      ))}

      <MenuItem key="3">
        <Stars
          style={{ margin: '35px', color: PALETTE.dark.darkBlack }}
          rating={t('main.rating')}
          movieRating={movieRating}
          setMovieRating={setMovieRating}
          query={query}
          setQuery={setQuery}
        />
      </MenuItem>
    </MenuFilter>
  );

  return (
    <Root>
      <CriteriasContainer>
        <SelectComponent
          aria-label="Genre"
          instanceId="test123"
          className="selectCategory"
          placeholder={t('main.genre')}
          options={resultGenres}
          multi={true}
          closeMenu={false}
          checkbox={{ Option }}
          onChange={changeGenre}
          value={selectedOptions}
        />
        <YearRangePickerComponent
          query={query}
          setQuery={setQuery}
          yearMovie={yearMovie}
          setYearMovie={setYearMovie}
        />
        <WrapperFilter>
          <WrapperInArrowInFilter>
            <TopArrow
              onClick={() => {
                setQuery({ ...query, currentPage: 0 });
                setAscDesc(Sort.asc);
              }}
            >
              {ascDesc === Sort.desc ? <>&#9651;</> : <>&#9650;</>}
            </TopArrow>
            <LeftArrow
              onClick={() => {
                setQuery({ ...query, currentPage: 0 });
                setAscDesc(Sort.desc);
              }}
            >
              {ascDesc === Sort.desc ? <>&#9660;</> : <>&#9661;</>}
            </LeftArrow>
          </WrapperInArrowInFilter>
          <SelectComponent
            aria-label="Sort"
            className="selectFilter"
            placeholder={t('main.sort')}
            onChange={(name: IName) => {
              setQuery({ ...query, currentPage: 0 });
              setValueSort(name.value);
            }}
            options={filter}
            multi={false}
            closeMenu={true}
            hideSelected={true}
            value={valueSort}
          />
        </WrapperFilter>
        <div className="filter">
          <Dropdown trigger={['click']} overlay={menu} animation="slide-up">
            <button>{t('main.filter')}</button>
          </Dropdown>
        </div>
        <Input
          aria-label="Search"
          inputType={'text'}
          label={t('main.search')}
          value={inputValue}
          onChange={changeSearchValue}
        />
      </CriteriasContainer>
    </Root>
  );
};

export default SearchPanel;
