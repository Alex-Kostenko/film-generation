import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
// import PageManagementComponent from '@/components/PageManagement';
import SearchPanelLine from '@/components/SearchPanelLine';
import TagContainer from '@/components/TagContainer';
import { ILocale, MovieEntity, IYearRange, ISelectedFilms } from '@/interfaces';
import {
  CardComponent,
  PanelWrapper,
  Paginate,
  Root,
} from '@/styles/movieListStyles/style';
import { Genres } from '@/utils/genres';

interface PageChangeEvent {
  selected: number;
}

const PageManagementComponent = dynamic(
  () => import('@/components/PageManagement'),
  {
    ssr: false,
  },
);

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

  // eslint-disable-next-line
  const [styless, setStyless] = useState(`a[aria-label='Page -1']`);
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState(search ? search : '');
  const [yearMovie, setYearMovie] = useState<IYearRange | 'empty'>(
    yearRange === 'empty'
      ? 'empty'
      : {
          startYear: Number(yearRange.split(',')[0]),
          endYear: Number(yearRange.split(',')[1]),
        },
  );
  const [valueFilter, setValueFilter] = useState('popularity');
  const [ascDesc, setAscDesc] = useState('desc');
  const [selectedOptions, setSelectedOptions] = useState<ISelectedFilms[]>([]);

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
      } catch (error: unknown) {
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

  const handlePageClick = async (event: PageChangeEvent) => {
    setQuery({ ...query, arrowUpload: false, currentPage: event.selected });
  };

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  return (
    <Root colorStyle={styless}>
      <BackBtn onClick={() => router.push('/')} />
      <TagContainer
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        valueFilter={valueFilter}
        yearMovie={yearMovie}
        rating={rating}
        searchTerm={searchTerm}
        arrayCategoriesId={arrayCategoriesId}
        setYearMovie={setYearMovie}
        setMovieRating={setMovieRating}
        setSearchTerm={setSearchTerm}
        setValueFilter={setValueFilter}
        setArrayCategoriesId={setArrayCategoriesId}
      />
      <PanelWrapper>
        <SearchPanelLine
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
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
      {content.map((movie: MovieEntity) => (
        <div key={movie.id}>
          <CardComponent
            img={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            title={movie.original_title ?? movie.title}
            subtitle={
              movie.original_title === movie.title ||
              movie.original_title === null
                ? ''
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
      <PageManagementComponent query={query} setQuery={setQuery} />
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

export const getServerSideProps = async ({ locale }: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default MovieList;
