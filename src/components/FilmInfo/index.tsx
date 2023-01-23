import { FC } from "react";

import {
  DescriptionContainer,
  DescriptionName,
  DescriptionItem,
  DescriptionText,
} from "./style";

interface IFilmInfoProps {
  name: string;
  year: string;
  country: string;
  genre: string;
  time: string;
  voiceActing: string;
  director: string;
  starring: string;
}

const DESCRIPTION_ITEM = [
  "name",
  "year",
  "country",
  "genre",
  "time",
  "voice acting",
  "director",
  "starring",
];

const FilmInfo: FC<IFilmInfoProps> = ({
  voiceActing,
  director,
  starring,
  country,
  genre,
  name,
  year,
  time,
}) => {
  return (
    <DescriptionContainer>
      <DescriptionItem>
        <DescriptionName>name:</DescriptionName>
        <DescriptionText>{name}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>year:</DescriptionName>
        <DescriptionText>{year}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>country:</DescriptionName>
        <DescriptionText>{country}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>genre:</DescriptionName>
        <DescriptionText>{genre}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>time:</DescriptionName>
        <DescriptionText>{time}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>voice acting:</DescriptionName>
        <DescriptionText>{voiceActing}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>director:</DescriptionName>
        <DescriptionText>{director}</DescriptionText>
      </DescriptionItem>
      <DescriptionItem>
        <DescriptionName>starring:</DescriptionName>
        <DescriptionText>{starring}</DescriptionText>
      </DescriptionItem>
    </DescriptionContainer>
  );
};

export default FilmInfo;
