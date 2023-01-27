import { useRouter } from 'next/router';
import { FC } from 'react';

import FilmCard from '@/components/FilmCard';

import { SearchCriteria, Title, Tag } from './style';

interface IMovie {
  id: number;
  title: string;
  description: string;
  img: string;
}

interface IMovieListProps {
  MOVIES: IMovie[];
}

const MovieList: FC<IMovieListProps> = ({ MOVIES }) => {
  const router = useRouter();
  const { category, filmByCompany } = router.query;

  const redirect = (id: number) => {
    router.push(`/aboutFilm/${id}`);
  };
  return (
    <>
      <Title>MOVIE LIST</Title>
      <div>
        <SearchCriteria>
          You are looking for a movie according to the given criteria:
          <Tag>{category}</Tag>,<Tag>{filmByCompany}</Tag>
        </SearchCriteria>
      </div>

      {MOVIES.map((movie: IMovie) => (
        <div key={movie.id} onClick={() => redirect(movie.id)}>
          <FilmCard
            src={movie.img}
            title={movie.title}
            description={movie.description}
          />
        </div>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const MOVIES = [
    {
      title: 'The Green Mile',
      id: 1,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpdh1AxuUDb35RsAnSrfMx76dn67CNe01ig&usqp=CAU',
    },
    {
      title: 'Intouchables',
      id: 2,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWT7L6aSrAaU_76X0ffGlxMFAPETyqDCXug&usqp=CAU',
    },
    {
      title: "Hachiko: A Dog's Story",
      id: 3,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      img: 'https://m.media-amazon.com/images/M/MV5BM2NmYjU4ODEtZjhjYi00MGNiLTg3NGMtZjUxNGIzOWZhYmRkXkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg',
    },
    {
      title: 'Avatar',
      id: 4,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      img: 'https://cdn.theatlantic.com/thumbor/0jPGepNCkAs1qO4RS686VP5BGTE=/0x0:4800x2700/1600x900/media/img/mt/2022/09/avatar_rerelease_2/original.jpg',
    },
    {
      title: 'Forrest Gump',
      id: 5,
      description:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      img: 'https://www.hollywoodreporter.com/wp-content/uploads/2019/06/forrest_gump-photofest_still_2-h_2019.jpg?w=1024',
    },
  ];

  return { props: { MOVIES } };
}

export default MovieList;
