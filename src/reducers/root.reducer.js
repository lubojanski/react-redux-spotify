import { combineReducers } from 'redux'

import  albumsByArtist, {albumTracks, showAlbumTracks} from './album.reducer'
import  tracksByArtist from './track.reducer'
import  {searchTerm, selectedFilter}  from './input.reducer'


const reducer = combineReducers({
  albumsByArtist,
  albumTracks,
  tracksByArtist,
  selectedFilter,
  searchTerm,
  showAlbumTracks
})

export default reducer