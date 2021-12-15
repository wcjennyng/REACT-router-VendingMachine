import React from "react"
import { Link } from 'react-router-dom'
import './Reese.css'

function Reese() {
  return (
    <div className="Reese">
      <h1>Here is your Candy</h1>
      <img
        src="https://media.giphy.com/media/5LtdB2j2JE3IY/giphy.gif"
      />
      <p><Link to='/'>Never mind</Link></p>
    </div>
  );
}

export default Reese;