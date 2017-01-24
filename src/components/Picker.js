require("./picker.css")
import React, { PropTypes } from 'react'

const Picker = ({  onClick }) => (
  <span>
    <button type="button" data-id='0' onClick={onClick}>Albums</button> 
    <button type="button" data-id='1' onClick={onClick}>Tracks</button>
  </span>
)

Picker.propTypes = {
  onClick: PropTypes.func.isRequired
}
//className={this.state.selectedItem == 1 ? "on" : "off"}
export default Picker
