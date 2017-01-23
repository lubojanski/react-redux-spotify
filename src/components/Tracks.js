import React, { PropTypes } from 'react'

const Tracks = ({tracks}) => (
  <ul>
    {tracks.map((track, i) =>
      <li key={i}>{track.artist} {track.name}
    
        </li>
    )}
  </ul>
)
//<img src={track.cover} alt=""/> 
Tracks.propTypes = {
  tracks: PropTypes.array.isRequired
}

export default Tracks
