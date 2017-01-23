export const REQUEST_ALBUMS = 'REQUEST_ALBUMS'
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
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
 // if (shouldFetchAlbums(getState(), artist)) {
    return dispatch(fetchAlbums(artist))
 // }
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

