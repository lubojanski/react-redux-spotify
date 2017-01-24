import { combineReducers } from 'redux'

import  albumsByArtist  from './album.reducer'
import  tracksByArtist from './track.reducer'
import  {searchTerm, selectedFilter}  from './input.reducer'


const reducer = combineReducers({
  albumsByArtist,
  tracksByArtist,
  selectedFilter,
  searchTerm
})

export default reducer