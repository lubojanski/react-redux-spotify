export const REQUEST_ALBUMS = 'REQUEST_ALBUMS'
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS'
export const REQUEST_ALBUM_TRACKS = 'REQUEST_ALBUM_TRACKS'
export const RECEIVE_ALBUM_TRACKS = 'RECEIVE_ALBUM_TRACKS'
export const SHOW_ALBUM_TRACKS = 'SHOW_ALBUM_TRACKS'


export const showAlbumTracks = index => ({
  type: SHOW_ALBUM_TRACKS,
  index
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
      cover: item.images[2].url,
      href: item.href
    }
  })
})
const fetchAlbums = artist  => dispatch => {
  dispatch(requestAlbums(artist))
  return fetch(`https://api.spotify.com/v1/search?q=artist:${artist}&type=album`)
    .then(response => response.json())
    .then(albums =>  dispatch(receiveAlbums(artist, albums)))
}

const shouldFetchAlbums = (state, artist) => {
  const albums = state.albumsByArtist[artist]
  if (!albums) {
    return true
  }
  if (albums.isFetching) {
    return false
  }
  
}
export const fetchAlbumsIfNeeded = artist => (dispatch, getState) => {
  if (shouldFetchAlbums(getState(), artist)) {
    return dispatch(fetchAlbums(artist))
  }
}

export const requestAlbumTracks = href => ({
  type: REQUEST_ALBUM_TRACKS,
  href
})

export const receiveAlbumTracks  = (href, json) => ({
  type: RECEIVE_ALBUM_TRACKS,
  href,
  albumTracks: json.tracks.items.map(item => {
    return {
    	name : item.name,
      previewUrl : item.preview_url,
      number : item.track_number
    }
  })
})

   	
const fetchAlbumTracks = href => dispatch => {
    dispatch(requestAlbumTracks(href))
    return fetch(href)
    .then(response => response.json())
    .then(tracks =>  dispatch(receiveAlbumTracks(href, tracks)))
}
const shouldFetchAlbumTracks = (state, href) => {
  const albumTracks = state.albumTracks[href]
  if (!albumTracks) {
    return true
  }
  if (albums.isFetching) {
    return false
  }
  
}
export const fetchAlbumTracksIfNeeded = href => (dispatch, getState) => {
  if (shouldFetchAlbums(getState(), href)) {
    return dispatch(fetchAlbumTracks(href))
  }
}



