require("./picker.css")
import React, { PropTypes } from 'react'

const Picker = ({  onClick, selectedFilter }) => (
  <span>
    <button type="button" data-id='0' onClick={onClick} className={selectedFilter == 0 ? "on" : "off"}>Albums</button> 
    <button type="button" data-id='1' onClick={onClick} className={selectedFilter == 1 ? "on" : "off"}>Tracks</button>
  </span>
)

Picker.propTypes = {
  onClick: PropTypes.func.isRequired
}
//
export default Picker
