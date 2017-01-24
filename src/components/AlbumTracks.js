require("./albumTracks.css")
import React, { PropTypes } from 'react'

const AlbumTracks = ({albumTracks }) => (
      
    <ul >
          {albumTracks.map((track, i) =>
            <li key={i} className="album-tracks-item" >
                <a href={track.previewUrl} target="_blank">{track.number}. {track.name} <span className="orange">play</span> </a>
            </li>
          )}
    </ul>
)

AlbumTracks.propTypes = {
  albumTracks: PropTypes.array.isRequired,
}

export default AlbumTracks