import {  REQUEST_ALBUMS, RECEIVE_ALBUMS,
 REQUEST_ALBUM_TRACKS , SHOW_ALBUM_TRACKS,
RECEIVE_ALBUM_TRACKS  
} from '../actions/album.action'

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

export  function albumTracks  (state = { }, action) {
  switch (action.type) {
    case RECEIVE_ALBUM_TRACKS:
    case REQUEST_ALBUM_TRACKS:
      return {
        ...state,
        items: tracks(state[action.href], action)
      }
    default:
      return state
  }
}

 const tracks= (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ALBUM_TRACKS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_ALBUM_TRACKS:
      return {
        ...state,
        isFetching: false,
        items: action.albumTracks,
      }
    default:
      return state
  }
}


export const showAlbumTracks = (state = 9999, action) => {
  switch (action.type) {
    case SHOW_ALBUM_TRACKS:
      { return action.index}
    default:
      return state;
  }
}


