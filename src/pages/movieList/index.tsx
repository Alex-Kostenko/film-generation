import classNames from 'classnames';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import SearchPanelLine from '@/components/SearchPanelLine';
import { IName } from '@/interfaces';
import {
  ArrowUploadWrapper,
  SearchCriteria,
  CardComponent,
  PanelWrapper,
  TagComponent,
  Select,
  Text,
  Root,
} from '@/styles/movieListStyles/style';
import { optionSize } from '@/utils/constants';
import { Genres } from '@/utils/genres';

import Reload from '../../../public/reload.svg';

const MovieList = () => {
  const router = useRouter();
  const { categories, categoriesId, rating, search }: any = router.query;

  const [movieRating, setMovieRating] = useState(rating / 2);
  const arrayCategories = categories && categories.split(',');
  const arrayCategoriesId =
    categoriesId && categoriesId.split(',').map((id: string) => Number(id));
  const reloadRef: any = useRef(null);
  // eslint-disable-next-line
  const [styless, setStyless] = useState(`a[aria-label='Page -1']`);
  const [content, setContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState(search);

  const [query, setQuery] = useState({
    currentPage: 0,
    count: 40,
    arrowUpload: false,
    isLoading: false,
    pageSize: 4,
  });

  const handleScrollTotop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    (async () => {
      setQuery({ ...query, isLoading: true });
      const allFilters = await queryMovie.pagination(
        query.pageSize,
        query.currentPage + 1,
        searchTerm,
        {
          genres_ids: arrayCategoriesId ? arrayCategoriesId : [],
          voteAvarageFrom: Number(rating),
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
    })();
  }, [query.currentPage, query.pageSize, rating, categoriesId, searchTerm]);

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

  return (
    <Root colorStyle={styless}>
      <BackBtn onClick={() => router.push('/')} />
      <div>
        <SearchCriteria>
          <TagComponent className="tag-medium" label={`рейтинг от ${rating}`} />
          {searchTerm && (
            <TagComponent className="tag-medium" label={searchTerm} />
          )}
          {categories &&
            arrayCategories.map((movie: string) => (
              <TagComponent className="tag-medium" label={movie} />
            ))}
        </SearchCriteria>
      </div>
      <PanelWrapper>
        <SearchPanelLine
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setMovieRating={setMovieRating}
          movieRating={movieRating}
        />
      </PanelWrapper>
      {content.map((movie: any) => (
        <div key={movie.id}>
          <CardComponent
            img={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            title={movie.original_title}
            subtitle={movie.original_title === movie.title ? null : movie.title}
            date={movie.release_date}
            description={movie.overview}
            action={() => redirect(movie.id)}
            labels={movie.genre_ids.map((item: number) => ' ' + Genres[item])}
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
          Show More
        </Text>
        <Select
          className="selectCategory"
          placeholder={'PageSize'}
          onChange={(name: IName) => {
            setQuery({ ...query, pageSize: Number(name.label) });
          }}
          options={optionSize}
          multi={false}
          closeMenu={true}
        />
      </ArrowUploadWrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={query.count}
        previousLabel="<"
        className="paginateClass"
        activeClassName="active"
        containerClassName="container"
        forcePage={query.currentPage}
      />
    </Root>
  );
};

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

export default MovieList;
