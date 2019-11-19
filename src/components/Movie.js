import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Overdrive from "react-overdrive";

const POSTER_PATH = "http://image.tmdb.org/t/p/w185";

const Movie = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <Overdrive id={String(props.id)}>
        <Poster src={`${POSTER_PATH}${props.img}`} alt={props.title} />
      </Overdrive>
    </Link>
  )
};

export default Movie;

export const Poster = styled.img`
  box-shadow: 0 0 30px white;
  &:hover {
    transform: scale(1.06);
    transition-duration: 300ms;
  }
`;
