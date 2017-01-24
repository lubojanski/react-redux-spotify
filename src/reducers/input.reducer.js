import {SEARCH, SELECT_FILTER} from '../actions/input.action'

export const selectedFilter = (state = 0, action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter 
    default:
      return state
  }
}
export const searchTerm = (state = 'rick astley', action) => {
  switch (action.type) {
    case SEARCH:
      return action.term
    default:
      return state
  }
}

