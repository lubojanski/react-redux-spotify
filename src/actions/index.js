export const REQUEST_ALBUMS = 'REQUEST_ALBUMS'
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const REQUEST_TRACKS = 'REQUEST_TRACKS'
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'
export const SELECT_FILTER = 'SELECT_FILTER'
export const SEARCH= 'SEARCH'

export const selectFilter = filter => ({
  type: SELECT_FILTER,
  filter
}) 
export const search = term => ({
  type: SEARCH,
  term
}) 

export const requestAlbums = artist => ({
  type: REQUEST_ALBUMS,
  artist
})

export const receiveAlbums = (artist, json) => ({
  type: RECEIVE_ALBUMS,
  artist,
  albums: json.albums.items.map(item => {
    return {
    	name : item.name,
    	artist : item.artists[0].name,
      cover: item.images[2].url
    }
  })
})

export const fetchAlbumsIfNeeded = artist => (dispatch, getState) => {
  if (shouldFetchAlbums(getState(), artist)) {
    return dispatch(fetchAlbums(artist))
  }
}

const shouldFetchAlbums = (state, artist) => {
  const albums = state.albumsByArtist[artist]
  if (!albums) {
    return true
  }
  if (albums.isFetching) {
    return false
  }
  return true // temp
}


const fetchAlbums = artist  => dispatch => {
  dispatch(requestAlbums(artist))
  return fetch(`https://api.spotify.com/v1/search?q=${artist}&type=album`)
    .then(response => response.json())
    .then(albums =>  dispatch(receiveAlbums(artist, albums)))
}

/////////////++++++++++++=====================**********************//////////////////////////////////////////////////////////////////////

export const requestTracks = artist => ({
  type: REQUEST_TRACKS,
  artist
})

export const receiveTracks = (artist, json) => ({
  type: RECEIVE_TRACKS,
  artist,
  tracks: json.tracks.items.map(item => {
    return {
    	name : item.name,
    	artist : item.artists[0].name,
      cover: item.album.images[2].url
    }
  })
})

export const fetchTracksIfNeeded = artist => (dispatch, getState) => {
 // if (shouldFetchAlbums(getState(), artist)) {
    return dispatch(fetchTracks(artist))
 // }
}

const shouldFetchTracks = (state, artist) => {
  const tracks = state.tracksByArtist[artist]
  if (!tracks) {
    return true
  }
  if (tracks.isFetching) {
    return false
  }
  return true // temp
}


const fetchTracks = artist  => dispatch => {
  dispatch(requestAlbums(artist))
  return fetch(`https://api.spotify.com/v1/search?q=${artist}&type=track`)
    .then(response => response.json())
    .then(tracks =>  dispatch(receiveTracks(artist, tracks)))
}

