import classNames from 'classnames';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import SearchPanelLine from '@/components/SearchPanelLine';
import { IName, IYearRange } from '@/interfaces';
import {
  ArrowUploadWrapper,
  SearchContainer,
  CardComponent,
  PanelWrapper,
  TagComponent,
  Paginate,
  Select,
  Text,
  Root,
} from '@/styles/movieListStyles/style';
import { optionSize } from '@/utils/constants';
import { Genres } from '@/utils/genres';

import Reload from '../../../public/reload.svg';

const MovieList = () => {
  const { t } = useTranslation();

  const router = useRouter();

  const notify = () =>
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

  const { categoriesId, rating, search, yearRange }: any = router.query;

  const [movieRating, setMovieRating] = useState(Number(rating));
  const [arrayCategoriesId, setArrayCategoriesId] = useState(
    categoriesId ? categoriesId.split(',').map((id: string) => Number(id)) : [],
  );

  const reloadRef: any = useRef(null);
  // eslint-disable-next-line
  const [styless, setStyless] = useState(`a[aria-label='Page -1']`);
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState(search ? search : '');
  const [yearMovie, setYearMovie] = useState<IYearRange | string>(
    yearRange === 'empty'
      ? 'empty'
      : {
          startYear: Number(yearRange.split(',')[0]),
          endYear: Number(yearRange.split(',')[1]),
        },
  );

  const [valueFilter, setValueFilter] = useState('popularity');
  const [ascDesc, setAscDesc] = useState('desc');

  const [query, setQuery] = useState({
    currentPage: 0,
    count: 40,
    arrowUpload: false,
    isLoading: false,
    pageSize: 5,
  });

  const handleScrollTotop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (content === undefined) {
      notify();
    }
  }, [content]);

  useEffect(() => {
    (async () => {
      setQuery({ ...query, isLoading: true });

      try {
        const allFilters = await queryMovie.pagination(
          query.pageSize,
          query.currentPage + 1,
          searchTerm,
          {
            genres_ids: arrayCategoriesId
              ? arrayCategoriesId.map((item: string) => Number(item))
              : [],
            voteAvarageFrom: movieRating,
            orderBy: valueFilter,
            dir: ascDesc,
            releaseDateFrom:
              typeof yearMovie === 'object' ? yearMovie.startYear : 1990,
            releaseDateTo:
              typeof yearMovie === 'object'
                ? yearMovie.endYear
                : new Date().getFullYear(),
          },
        );
        if (query.arrowUpload) {
          setContent(content.concat(allFilters.data.results));
        } else {
          setContent(allFilters.data.results);
          handleScrollTotop();
        }
        setQuery({
          ...query,
          count: allFilters.data.total_pages,
          isLoading: false,
        });
      } catch (error: any) {
        notify();
      }
    })();
  }, [
    query.currentPage,
    query.pageSize,
    movieRating,
    arrayCategoriesId,
    searchTerm,
    valueFilter,
    ascDesc,
    yearMovie,
  ]);

  useEffect(() => {
    if (query.arrowUpload) {
      // eslint-disable-next-line
      if (styless === `a[aria-label='Page -1']`) {
        setStyless(`a[aria-label='Page ${query.currentPage}']`);
      } else {
        setStyless(styless + `,a[aria-label='Page ${query.currentPage}']`);
      }
    } else {
      // eslint-disable-next-line
      setStyless(`a[aria-label='Page -1']`);
    }
  }, [query.currentPage]);

  const handlePageClick = async (event: any) => {
    setQuery({ ...query, arrowUpload: false, currentPage: event.selected });
  };

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  return (
    <Root colorStyle={styless}>
      <BackBtn onClick={() => router.push('/')} />
      <SearchContainer>
        {rating && (
          <TagComponent
            className="tag-medium"
            label={`${t('movieList.rating')}${rating / 2}`}
          />
        )}
        {searchTerm && (
          <TagComponent className="tag-medium" label={searchTerm} />
        )}
        {arrayCategoriesId &&
          arrayCategoriesId.map((categoriesId: number) => (
            <TagComponent
              className="tag-medium"
              label={t(`genres.${Genres[categoriesId]}`)}
            />
          ))}
      </SearchContainer>
      <PanelWrapper>
        <SearchPanelLine
          ascDesc={ascDesc}
          setAscDesc={setAscDesc}
          setValueFilter={setValueFilter}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setMovieRating={setMovieRating}
          movieRating={movieRating}
          arrayGenres={arrayCategoriesId}
          arrayCategoriesId={arrayCategoriesId}
          setArrayCategoriesId={setArrayCategoriesId}
          yearMovie={yearMovie}
          setYearMovie={setYearMovie}
        />
      </PanelWrapper>
      {content.map((movie: any) => (
        <div key={movie.id}>
          <CardComponent
            img={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            title={
              movie.original_title === null ? movie.title : movie.original_title
            }
            subtitle={
              movie.original_title === null ||
              movie.original_title === movie.title
                ? null
                : movie.title
            }
            release={t('movieList.release')}
            date={movie.release_date}
            description={movie.overview}
            action={() => redirect(movie.id)}
            labels={movie.genre_ids.map((item: number) =>
              t(`genres.${Genres[item]}`),
            )}
          />
        </div>
      ))}
      <ArrowUploadWrapper>
        <div ref={reloadRef}>
          <Reload
            className={classNames('reload', {
              loading: query.isLoading,
            })}
            aria-label="Reload"
            onClick={() => {
              setQuery({
                ...query,
                currentPage: query.currentPage + 1,
                arrowUpload: true,
              });
            }}
          />
        </div>
        <Text
          onClick={() => {
            setQuery({
              ...query,
              currentPage: query.currentPage + 1,
              arrowUpload: true,
            });
          }}
        >
          {t('movieList.showMore')}
        </Text>
        <Select
          className="selectCategory"
          placeholder={
            query.pageSize === 5 ? t('movieList.countFilm') : query.pageSize
          }
          onChange={(name: IName) => {
            setQuery({ ...query, pageSize: Number(name.label) });
          }}
          options={optionSize}
          multi={false}
          closeMenu={true}
        />
      </ArrowUploadWrapper>
      <Paginate
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={query.count}
        previousLabel="<"
        className="paginateClass"
        activeClassName="active"
        containerClassName="container"
        forcePage={query.currentPage}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Root>
  );
};

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default MovieList;
