import React from "react"
import { Link } from 'react-router-dom'
import './Cheetos.css'

function Cheetos() {
  return (
    <div className="Cheetos">
      <h1>Here is your Snack</h1>
      <img
        src="https://media.giphy.com/media/DRsN032KfVl19CCnqK/giphy.gif"
      />
      <p><Link to='/'>Never Mind</Link></p>
    </div>
  );
}

export default Cheetos;