require("./search.css")
import React, { PropTypes } from 'react'

const Search = ({onKeyUp}) => (
  <span>
    <input type="text" onKeyUp={e => onKeyUp(e.target.value)} />

      

  </span>
)

Search.propTypes = {
  value: PropTypes.string,
  onKeyUp: PropTypes.func.isRequired
}

export default Search
