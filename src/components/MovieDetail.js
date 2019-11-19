import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import * as actions from '../actions';
import { connect } from "react-redux";

class MovieDetail extends Component {
  render() {
    const POSTER_PATH = "http://image.tmdb.org/t/p/w185";
    const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

    const { movie } = this.props;

    return (
      <Fragment>
        <BackdropContainer
          backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
        />
        <DetailInfo>
          <Overdrive id={String(movie.id)}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt="poster"
              style={{ boxShadow: "0 5px 30px black" }}
            />
          </Overdrive>
          <div id="info">
            <h1>{movie.title}</h1>
            <div id="infoAttr">
              <p className="first">{movie.release_date}</p>
              <p>
                {movie.vote_average}
                /10
              </p>
            </div>

          </div>
        </DetailInfo>


        <Description>
          <p>{movie.overview}</p>
        </Description>
      </Fragment>
    );
  }
}

function mapStateToProps({ movies }, ownProps) {
  return {
    movie: movies[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  actions
)(MovieDetail);

const BackdropContainer = styled.div`
  position: relative;
  padding-top: 70vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-position: relative;
  object-fit: cover;
  justify-content: center;
  opacity: 0.8;
`;

const DetailInfo = styled.div`
  background: hsl(0, 0%, 93%);
  text-align: left;
  padding: 1.5em 1em 0 1em;
  display: flex;
  /* align-items: center; */
  font-size: 1.2em;
  div#info {
    margin-left: 20px;
    width: 100%;
    height: 180px;
  }
  div#infoAttr {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    margin: 0.5em auto 1em 0;
    color: hsl(0, 100%, 59%);
    font-size: 0.7em;
  }
  div#infoAttr > p:not(.first) {
    display: inline-block;
    margin-left: 1.5em;
  }

  div#infoAttr > p:hover {
    color: hsl(0, 100%, 72%);
    cursor: pointer;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

const Description = styled.div`
  margin: 0 auto;
  padding: 1.3em;
  text-align: left;
  width: 100%;
  /* position: absolute;
  left: -2%;
  top: 30%; */
  color: whitesmoke;
  background: black;
  text-shadow: 1px 1px black;
`;
