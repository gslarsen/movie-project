import { FETCH_MOVIES } from '../actions/types';

import { normalize, schema } from 'normalizr';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIES:
      const movieSchema = new schema.Entity('movies');

      const movieListSchema = new schema.Array(movieSchema);

      const normalizedOrder = normalize(action.payload.results, movieListSchema).result

      return [...state, ...normalizedOrder];
    default:
      return state;
  }
}