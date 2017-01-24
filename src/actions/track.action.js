export const REQUEST_TRACKS = 'REQUEST_TRACKS'
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS'


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
      number: item.track_number,
    	artist : item.artists[0].name,
      cover: item.album.images[2].url,
      previewUrl: item.preview_url
    }
  })
})




const fetchTracks = artist  => dispatch => {
  dispatch(requestTracks(artist))
  return fetch(`https://api.spotify.com/v1/search?q=artist:${artist}&type=track`)
    .then(response => response.json())
    .then(tracks =>  dispatch(receiveTracks(artist, tracks)))
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
export const fetchTracksIfNeeded = artist => (dispatch, getState) => {
  if (shouldFetchTracks(getState(), artist)) {
    return dispatch(fetchTracks(artist))
  }
}
