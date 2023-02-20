import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import Reload from '../../../public/reload.svg';

import BackBtn from '@/components/BackBtn';
import { IMovieListProps, IMovie } from '@/interfaces';

import { MOVIES } from './__mocks__/movies';
import {
  SearchCriteria,
  CardComponent,
  TagComponent,
  Line,
  Root,
  WrapperReload,
} from './style';
import queryMovie from '@/Services/queryMovies';

const MovieList: FC<IMovieListProps> = ({ MOVIES }) => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  useEffect(() => {
    if (document) {
      const a: any = document.getElementsByTagName('li');
      var arr = [].slice.call(a);

      const b = arr.map((item: HTMLElement, i: number) => {
        if (i >= 3 && i <= 6) {
          item.style.background = 'yellow';
          item.style.color = 'green';
          const b = item.children;

          var arr1 = [].slice.call(b);
          arr1.map((item: HTMLElement) => {
            item.style.background = 'black';
            item.style.color = 'green';
          });
        }
      });
    }
  }, []);

  const paginRef = useRef(null);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(40);
  const [content, setContent] = useState(0);
  // paginRef.current.state.selected.style.background = 'red';
  // useEffect(() => {
  //   (async () => {
  //     const allFilters = await queryMovie.pagination(4, 1, {
  //       filters: [],
  //     });
  //     setPageCount(allFilters.total_pages);
  //     setContent(allFilters);
  //     // console.log(allFilters);
  //   })();
  // }, [, /*itemOffset*/ currentPage]);
  const refA = useRef(null);
  useEffect(() => {
    (async () => {
      const allFilters = await queryMovie.pagination(4, 1, {
        filters: [],
      });
      // console.log(allFilters);
    })();
    (async () => {
      const all = await queryMovie.getAllFilter();
      // console.log(all);
    })();
  }, []);

  const handlePageClick = async (event: any) => {
    setCurrentPage(event.selected);
    console.log(event);
  };

  const handleLabelBuilder = (label: any) => {};

  return (
    <Root>
      <BackBtn />
      <div>
        <SearchCriteria>
          <TagComponent className="tag-large" label={category} />
          <TagComponent className="tag-large" label={filmByCompany} />
        </SearchCriteria>
      </div>
      {MOVIES.map((movie: IMovie) => (
        <div key={movie.id}>
          <CardComponent
            img={movie.img}
            title={movie.engTitle}
            subtitle={movie.rusTitle}
            labels={movie.lables}
            date={movie.date}
            description={movie.description}
            action={() => redirect(movie.id)}
          />
          {MOVIES.length === movie.id ? null : <Line />}
        </div>
      ))}
      <WrapperReload>
        <Reload
          className="reload"
          aria-label="Reload"
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </WrapperReload>

      <ReactPaginate
        breakLabel="..."
        nextLabel={'>'}
        ref={refA}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        className="paginateClass"
        activeClassName="active"
        containerClassName="container"
        forcePage={currentPage}
        breakClassName={'liItem'}
        ariaLabelBuilder={handleLabelBuilder}
      />
    </Root>
  );
};

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      MOVIES,
    },
  };
}

export default MovieList;
