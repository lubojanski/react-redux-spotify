require("./albums.css")
import React, { PropTypes } from 'react'
import AlbumTracks from '../components/AlbumTracks'

const Albums = ({albums, showAlbumTracks, albumTracks, onClick, isSelected, clicked }) => (
  <ul>
    {albums.map((album, i) =>
      <li key={i} className="albums-container-item" onClick={() => {onClick(album.href, i)}}>  
        <img src={album.cover} alt="img"/> 
        <div className="links">
          <p className="album-title">{album.artist} - {album.name}</p>
          <p className="check-tracks" > check tracklist </p>
        </div>
        {showAlbumTracks == i &&
          <AlbumTracks albumTracks={albumTracks} />
        }
      </li>
    )}
  </ul>
) 


export default Albums
