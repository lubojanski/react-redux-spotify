
import {  REQUEST_TRACKS, RECEIVE_TRACKS, } from '../actions/track.action'


const tracks = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_TRACKS:
      return {
        isFetching: true,
        ...state,
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

export default tracksByArtist





