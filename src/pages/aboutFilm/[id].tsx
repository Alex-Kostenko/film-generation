import { FC } from 'react';

import FilmInfo from '@/components/FilmInfo';

import {
  LinkConteiner,
  AboutFilms,
  Container,
  LinkTitle,
  Video,
  Title,
  Link,
} from './style';

interface IDescription {
  voiceActing: string;
  director: string;
  starring: string;
  country: string;
  genre: string;
  name: string;
  year: string;
  time: string;
}

interface IVideo {
  poster: string;
  src: string;
}

type AboutFilmProps = {
  description: IDescription;
  dataVideo: IVideo;
  filmName: string;
};

const AboutFilm: FC<AboutFilmProps> = ({
  description,
  dataVideo,
  filmName,
}) => {
  return (
    <>
      <Title>{filmName}</Title>
      <Container>
        <Video controls poster={dataVideo.poster} src={dataVideo.src}></Video>
        <FilmInfo
          voiceActing={description.voiceActing}
          director={description.director}
          starring={description.starring}
          country={description.country}
          genre={description.genre}
          name={description.name}
          year={description.year}
          time={description.time}
        />
      </Container>
      <AboutFilms>
        The Green Mile is a 1999 American fantasy drama film written and
        directed by Frank Darabont and based on Stephen King's 1996 novel of the
        same name. It stars Tom Hanks as a death row prison guard during the
        Great Depression who witnesses supernatural events following the arrival
        of an enigmatic convict Michael Clarke Duncan at his facility. David
        Morse, Bonnie Hunt, Sam Rockwell, and James Cromwell appear in
        supporting roles. The film premiered on December 10, 1999, in the United
        States to positive reviews from critics, who praised Darabont's
        direction and writing, emotional weight, and performances particularly
        for Hanks and Duncan, although its length received criticism. Since its
        release, the film has gained a reputation as one of the most emotionally
        touching films of all time.It was a commercial success, grossing $286
        million from its $60 million budget, and was nominated for four Academy
        Awards: Best Picture, Best Supporting Actor for Duncan, Best Sound and
        Best Screenplay Based on Material Previously Produced or Published.
      </AboutFilms>
      <LinkConteiner>
        <LinkTitle>Links to watch this movie:</LinkTitle>
        <Link href="https://www.google.com/search?q=ptktyfz+vbkz&oq=ptktyfz+vbkz&aqs=chrome..69i57j46i10i512j0i10i22i30i625l5.2979j0j15&sourceid=chrome&ie=UTF-8">
          first link
        </Link>
        <Link href="https://kinovezha.com/576-zelena-mylya.html">
          second link
        </Link>
      </LinkConteiner>
    </>
  );
};

export async function getServerSideProps() {
  const dataVideo = {
    src: '',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzA4ZWRhNjktMTA3ZS00NDNiLThmMDMtNzdlYzk0ZjY2ZGFmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
  };
  const description = {
    voiceActing: 'dubbed',
    director: 'Frank Darabont',
    starring: 'Tom Hanks, Michael Clarke, David Morse',
    country: 'USA',
    genre: 'detective, drama, crime',
    name: 'The Green Mile',
    year: '1999',
    time: '3 hours 9 minutes',
  };

  const filmName = 'The green mile';

  return { props: { dataVideo, description, filmName } };
}

export default AboutFilm;
