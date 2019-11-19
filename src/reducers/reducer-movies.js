import { FETCH_MOVIES } from '../actions/types';
import { normalize, schema } from 'normalizr';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIES:

      const movieSchema = new schema.Entity('movies');

      const movieListSchema = new schema.Array(movieSchema);

      console.log(normalize(action.payload.results, movieListSchema))

      const normalizedMovies = normalize(action.payload.results, movieListSchema).entities.movies;

      return {...normalizedMovies, ...state} ;
    default:
      return state;
  }
}