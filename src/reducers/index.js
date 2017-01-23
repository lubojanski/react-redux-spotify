import { combineReducers } from 'redux'
import {
  SELECT_FILTER, SEARCH,
  REQUEST_ALBUMS, RECEIVE_ALBUMS
} from '../actions'

const selectedFilter = (state = 'albums', action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter //
    default:
      return state
  }
}
const searchTerm = (state = 'albums', action) => {
  switch (action.type) {
    case SEARCH:
      return action.term
    default:
      return state
  }
}
const albums = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ALBUMS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ALBUMS:
      return {
        ...state,
        isFetching: false,
        items: action.albums,
      }
    default:
      return state
  }
}

const albumsByArtist = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_ALBUMS:
    case REQUEST_ALBUMS:
      return {
        ...state,
        [action.artist]: albums(state[action.artist], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  albumsByArtist,
  selectedFilter,
  searchTerm
})

export default rootReducer
