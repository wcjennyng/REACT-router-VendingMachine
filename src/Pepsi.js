import React from "react"
import { Link } from 'react-router-dom'
import './Pepsi.css'

function Pepsi() {
  return (
    <div className="Pepsi">
      <h1>Here is your Beverage</h1>
      <img
        src="https://media.giphy.com/media/8maWQF4IJBNf05mVG9/giphy.gif"
      />
      <p><Link to='/'>Never mind</Link></p>
    </div>
  );
}

export default Pepsi;