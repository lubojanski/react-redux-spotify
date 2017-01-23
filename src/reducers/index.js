import { combineReducers } from 'redux'
import {
  SELECT_FILTER, SEARCH,
  REQUEST_ALBUMS, RECEIVE_ALBUMS, 
  REQUEST_TRACKS, RECEIVE_TRACKS, 
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
        items: albums(state[action.artist], action)
      }
    default:
      return state
  }
}

const tracks = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRACKS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TRACKS:
      return {
        ...state,
        isFetching: false,
        items: action.tracks,
      }
    default:
      return state
  }
}

const tracksByArtist = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_TRACKS:
    case REQUEST_TRACKS:
      return {
        ...state,
        items: tracks(state[action.artist], action)
      }
    default:
      return state
  }
}





const rootReducer = combineReducers({
  albumsByArtist,
  tracksByArtist,
  selectedFilter,
  searchTerm
})

export default rootReducer
