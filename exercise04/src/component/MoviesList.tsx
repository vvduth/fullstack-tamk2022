import React, { FC } from "react";
import { CardGroup, Row } from "react-bootstrap";
import { MoviesConvert } from "../App";
import { Movie, Movies } from "../types/type";
import MovieItem from "./MovieItem";

interface listProps {
  thrillers: MoviesConvert;
  scifi: MoviesConvert;
  documentary: MoviesConvert;
}

const MoviesList: FC<listProps> = ({
  thrillers,
  scifi,
  documentary,
}: listProps) => {
  return (
    <>
      <h3>{thrillers.type}</h3>
      {thrillers.movies.map((film: Movie) => (
        <Row xs={2} md={3} className="g-4">
          <MovieItem film={film} />
        </Row>
      ))}

      <h3>{scifi.type}</h3>
      {scifi.movies.map((film: Movie) => (
        <Row xs={2} md={3} className="g-4">
          <MovieItem film={film} />
        </Row>
      ))}

      <h3>{documentary.type}</h3>
      {documentary.movies.map((film: Movie) => (
        <Row xs={2} md={3} className="g-4">
          <MovieItem film={film} />
        </Row>
      ))}
    </>
  );
};

export default MoviesList;
