import {  REQUEST_ALBUMS, RECEIVE_ALBUMS} from '../actions/album.action'

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

export default function albumsByArtist  (state = { }, action) {
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

