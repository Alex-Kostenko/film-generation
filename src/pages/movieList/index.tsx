import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FC, useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import BackBtn from '@/components/BackBtn';
import { IMovieListProps, IMovie } from '@/interfaces';
import {
  SearchCriteria,
  CardComponent,
  TagComponent,
  Line,
  Text,
  Root,
  ArrowUploadWrapper,
} from '@/styles/movieListStyles/style';

import Reload from '../../../public/reload.svg';

import queryMovie from '@/Services/queryMovies';

const MovieList: FC<IMovieListProps> = ({ MOVIES }) => {
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
          {content.length === movie.id ? null : <Line />}
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

export async function getServerSideProps({ locale }: any) {
  const MOVIES = [
    {
      engTitle: 'The Green Mile',
      rusTitle: 'Зеленая миля',
      lables: ['detective', 'dramma'],
      date: '22.12.1998',
      id: 1,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.imprisoned for six months for robbery, but Philippe does not care about Driss's past.execution.A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.imprisoned for six months for robbery, but Philippe does not care about Driss's past.",
      img: 'https://data-vyhoda.ru/wp-content/uploads/2020/03/2020-03-05_20-02-35.jpg',
    },
    {
      engTitle: 'Hachiko',
      rusTitle: 'Хатико',
      lables: ['dramma', 'horor'],
      date: '21.12.2008',
      id: 2,
      description:
        "Commuting by train, music professor Parker Wilson finds an Akita puppy, whose cage broke unnoticed during shipping, leaving his destination unknown, and since the station can't care for it and the dog catcher warns even such cute ones may not be adopted in the two weeks allowed, he kindly takes it home. His bossy, jealous wife Cate initially makes Parker swear it won't stay, but by the time its' clear nobody will claim him and an adoption candidate is found, she agrees to keep the dog, who won over their daughter Andy and her fiance Michael at first sight. Parker's Japanese college friend Ken inspires naming the pup Hachi(ko), and is pleasantly surprised when Parker successfully tackles the challenge to get it to fetch, which Akitas don't usually do. Hachi makes a habit of waiting for his equally doting master at the station every evening, but after a cardiac crisis, Parker dies. Hachi refuses to accept this, being moved to Michael's home as Cate moves out, waiting for a master who can never come home again, by now collectively adopted by sympathizing town-folk. The story is told in flashbacks as class assignment 'my hero' by Michael's teen son Robbie, who also gets an Akita puppy.",
      img: 'https://m.media-amazon.com/images/M/MV5BM2NmYjU4ODEtZjhjYi00MGNiLTg3NGMtZjUxNGIzOWZhYmRkXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg',
    },
    {
      engTitle: 'Avatar',
      rusTitle: 'Аватар',
      lables: ['dramma', 'adventure'],
      date: '21.12.2012',
      id: 3,
      description:
        "The next day when Driss returns, Philippe's aide Yvonne greets him, telling him he has the job on a trial basis. Despite being uninterested and inexperienced, he does well caring for Philippe, albeit using unconventional methods. Driss learns the extent of his employer’s disability, aiding Philippe in every aspect of his life. A friend of Philippe's reveals that Driss was imprisoned for six months for robbery, but Philippe does not care about Driss's past. As Driss is the only one who does not treat Philippe with pity, he will not fire Driss as long as he does his job properly.Philippe explains his disability resulted from a paragliding incident and that his wife died without bearing children. Gradually, Driss helps him to organise his private life, including disciplining his precocious adopted daughter Elisa. Driss discovers modern art, opera and starts painting. For Philippe's birthday, a private classical music concert is performed in his living room.",
      img: 'https://cdn.theatlantic.com/thumbor/0jPGepNCkAs1qO4RS686VP5BGTE=/0x0:4800x2700/1600x900/media/img/mt/2022/09/avatar_rerelease_2/original.jpg',
    },
    {
      engTitle: 'Forrest Gump',
      rusTitle: 'Форест Гамп',
      lables: ['dramma', 'history'],
      date: '21.1MOVIES2.2005',
      id: 4,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.imprisoned for six months for robbery, but Philippe does not care about Driss's past. As Driss is the only one who does not treat Philippe with pity, he will not fire Driss as long as he does his job properly.Philippe explains his disability resulted from a paragliding incident and that his wife died without bearing children. Gradually, Driss helps him to organise his private life, including disciplining his precocious adopted daughter Elisa. Driss discovers modern art, opera and starts painting. For Philippe's birthday, a private classical music concert is performed in his living room.",
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/06/forrest_gump-photofest_still_2-h_2019.jpg?w=1024',
    },
    {
      engTitle: 'Intouchables',
      rusTitle: '1+1',
      lables: ['dramma', 'comedy'],
      date: '21.12.2015',
      id: 5,
      description:
        "The next day when Driss returns, Philippe's aide Yvonne greets him, telling him he has the job on a trial basis. Despite being uninterested and inexperienced, he does well caring for Philippe, albeit using unconventional methods. Driss learns the extent of his employer’s disability, aiding Philippe in every aspect of his life. A friend of Philippe's reveals that Driss was imprisoned for six months for robbery, but Philippe does not care about Driss's past. As Driss is the only one who does not treat Philippe with pity, he will not fire Driss as long as he does his job properly.Philippe explains his disability resulted from a paragliding incident and that his wife died without bearing children. Gradually, Driss helps him to organise his private life, including disciplining his precocious adopted daughter Elisa. Driss discovers modern art, opera and starts painting. For Philippe's birthday, a private classical music concert is performed in his living room.",
    },
  ];
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      MOVIES,
    },
  };
}

export default MovieList;
