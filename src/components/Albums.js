require("./albums.css")
import React, { PropTypes } from 'react'

const Albums = ({albums}) => (
  <ul>
    {albums.map((album, i) =>
      <li key={i} className="albums-container-item">
        <img src={album.cover} alt="img"/> 
        <div className="links">
          <p className="album-title">{album.artist} - {album.name}</p>
          <p className="check-tracks"> check tracklist </p>
        </div>
        </li>
    )}
  </ul>
)
//
Albums.propTypes = {
  albums: PropTypes.array.isRequired
}

export default Albums
