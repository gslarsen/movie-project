import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { connect } from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

class MovieList extends Component {
  constructor() {
    super();

    this.loadItems = this.loadItems.bind(this);

    this.state = {
      hasMoreItems: true
    };
  } 

  loadItems(page) {
    if (page < this.props.totalPages || this.props.totalPages === 0) {
      this.props.fetchMovies(page);
    } else {
      this.setState({ hasMoreItems: false });
    }
  }

  render() {
    const moviesArray = this.props.order.map((movieId) => {
      return this.props.movies[movieId];
    });
    
    const movies = _.map(moviesArray, m => {
      return <Movie id={m.id} key={m.id} title={m.title} img={m.poster_path} />;
    });

    console.log('moviesObj = ', movies);

    return (
      <InfiniteScroll
        loadMore={this.loadItems}
        pageStart={0}
        hasMore={this.state.hasMoreItems}
      >
        <MovieGrid>{movies}</MovieGrid>
      </InfiniteScroll>
    );
  }
}

function mapStateToProps (state) {
  return {
    movies: state.movies,
    order: state.movies_order,
    totalPages: state.total_pages
  }
}

export default connect(
  mapStateToProps,
  actions
)(MovieList);

const MovieGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em;
  margin: 0 auto;
`;