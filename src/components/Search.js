import React, { PropTypes } from 'react'

const Search = ({value, onKeyUp}) => (
  <span>
    <h1>{value}</h1>
    <input type="text" onKeyUp={e => onKeyUp(e.target.value)} />

      

  </span>
)

Search.propTypes = {
  value: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired
}

export default Search
