require("./app.css");

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { search, selectFilter } from '../actions/input.action'
import { fetchAlbumsIfNeeded, fetchAlbumTracksIfNeeded, showAlbumTracks} from '../actions/album.action'
import { fetchTracksIfNeeded } from '../actions/track.action'
import Picker from '../components/Picker'
import Albums from '../components/Albums'
import Tracks from '../components/Tracks'
import Search from '../components/Search'

class App extends Component {
      constructor(props) {
        super(props);
        this.state = {active: false};
    }

  static propTypes = {
    selectedFilter: PropTypes.number.isRequired,
    albums: PropTypes.array.isRequired,
    tracks: PropTypes.array.isRequired,
    isFetching: PropTypes.bool,
    searchTerm: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
    selectedAlbumTracks: PropTypes.array.isRequired,
    showAlbumTracks: PropTypes.number
  }
  click() {
        this.setState({active: true});
    }

  componentDidMount() {
    const { dispatch, searchTerm } = this.props
    dispatch(fetchAlbumsIfNeeded(searchTerm))
    dispatch(fetchTracksIfNeeded(searchTerm))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm !== this.props.searchTerm) {
      const { dispatch, searchTerm } = nextProps
      dispatch(fetchAlbumsIfNeeded(searchTerm))
      dispatch(fetchTracksIfNeeded(searchTerm))
    }
  }

  handleFilterClick = (event) => {
    var nextFilter = Number.parseInt(event.currentTarget.dataset.id)
    this.props.dispatch(selectFilter(nextFilter))
  }
  handleSearch = nextTerm => {
    this.props.dispatch(search(nextTerm))
  }

  handleAlbumClick = (albumHref, index) => {
    if (this.isSelected ){
          this.isSelected = false
          this.props.dispatch(showAlbumTracks(999))
          console.log(this.isSelected);
        } 
    else {

          this.props.dispatch(fetchAlbumTracksIfNeeded(albumHref))
          this.isSelected = true
          this.props.dispatch(showAlbumTracks(index))
          console.log(this.isSelected);
      }
  }

  render() {
    const { selectedFilter, albums, tracks, isFetching, searchTerm, selectedAlbumTracks, showAlbumTracks} = this.props

    return (
      <div className="container">
        <header>
                <h1>Find the music you love.</h1>
        </header>
      <div className="outlet">

      <form className="search-form">
        <Search   value={searchTerm}
                  onKeyUp={this.handleSearch} />
      </form>
      <nav>
        <Picker 
                  selectedFilter={selectedFilter}
                  onClick={this.handleFilterClick}/>     
      </nav>


      <div className="list-container">
          {selectedFilter ?
            ( <Tracks tracks={tracks}  />)
             : 
             (<Albums albums={albums} 
              isSelected={showAlbumTracks}
              albumTracks={selectedAlbumTracks}
              onClick={this.handleAlbumClick}
              showAlbumTracks={showAlbumTracks}
              clicked={this.state.active} />)
            }  
      </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { selectedFilter, albumsByArtist, tracksByArtist, searchTerm, showAlbumTracks, albumTracks} = state    

  const {items: albums } = albumsByArtist.items || { items: [] }
  const { items: tracks} = tracksByArtist.items || { items: [] }
  const { items: selectedAlbumTracks } = albumTracks.items || {items: []}

  return {
    selectedFilter,
    albums,
    tracks,
    searchTerm,
    showAlbumTracks,
    selectedAlbumTracks
  }
}

export default connect(mapStateToProps)(App)
