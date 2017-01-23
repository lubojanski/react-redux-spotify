import React, { PropTypes } from 'react'

const Albums = ({albums}) => (
  <ul>
    {albums.map((album, i) =>
      <li key={i}>{album.artist} {album.name}
    
        </li>
    )}
  </ul>
)
//<img src={album.cover} alt=""/> 
Albums.propTypes = {
  albums: PropTypes.array.isRequired
}

export default Albums
