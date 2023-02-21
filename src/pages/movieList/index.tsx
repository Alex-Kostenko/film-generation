import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import queryMovie from '@/Services/queryMovies';
import BackBtn from '@/components/BackBtn';
import { IMovieListProps } from '@/interfaces';
import {
  ArrowUploadWrapper,
  SearchCriteria,
  CardComponent,
  TagComponent,
  Text,
  Root,
} from '@/styles/movieListStyles/style';

import Reload from '../../../public/reload.svg';

const MovieList: FC<IMovieListProps> = () => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };

  const reloadRef: any = useRef(null);

  // eslint-disable-next-line
  const [styless, setStyless] = useState(`a[aria-label='Page -1']`);

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(40);
  const [content, setContent] = useState([]);
  const [arrowUpload, setArrowUpload] = useState(false);

  useEffect(() => {
    (async () => {
      const allFilters = await queryMovie.pagination(
        itemsPerPage,
        currentPage + 1,
        {
          filters: [],
        },
      );
      setCount(allFilters.data.total_pages);
      setContent(allFilters.data.results);
    })();
  }, [currentPage]);

  useEffect(() => {
    if (arrowUpload) {
      // eslint-disable-next-line
      if (styless === `a[aria-label='Page -1']`) {
        setStyless(`a[aria-label='Page ${currentPage}']`);
      } else {
        setStyless(styless + `,a[aria-label='Page ${currentPage}']`);
      }
    } else {
      // eslint-disable-next-line
      setStyless(`a[aria-label='Page -1']`);
    }
  }, [currentPage]);

  const handlePageClick = async (event: any) => {
    setArrowUpload(false);
    setCurrentPage(event.selected);
  };

  const [counter, setCounter] = useState(360);

  return (
    <Root colorStyle={styless}>
      <BackBtn />
      <div>
        <SearchCriteria>
          <TagComponent className="tag-large" label={category} />
          <TagComponent className="tag-large" label={filmByCompany} />
        </SearchCriteria>
      </div>
      {content.map((movie: any) => (
        <div key={movie.id}>
          <CardComponent
            img={
              movie.poster_path &&
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`
            }
            title={movie.original_title}
            subtitle={movie.title}
            labels={movie.lables}
            date={movie.release_date}
            description={movie.overview}
            action={() => redirect(movie.id)}
          />
        </div>
      ))}
      <ArrowUploadWrapper>
        <div ref={reloadRef}>
          <Reload
            className="reload"
            aria-label="Reload"
            onClick={() => {
              reloadRef.current.style.transform = `rotate(${counter}deg)`;
              reloadRef.current.style.transition = 'all 1s ease-in-out';
              setCounter(counter + 360);
              setCurrentPage(currentPage + 1), setArrowUpload(true);
            }}
          />
        </div>
        <Text>Show More</Text>
      </ArrowUploadWrapper>

      <ReactPaginate
        breakLabel="..."
        nextLabel={'>'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={count}
        previousLabel="<"
        className="paginateClass"
        activeClassName="active"
        containerClassName="container"
        forcePage={currentPage}
      />
    </Root>
  );
};

export default MovieList;
