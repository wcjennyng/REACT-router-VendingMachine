import React from "react"
import { Link } from "react-router-dom"
import './VendingMachine.css'

function Home() {
    return (
        <div className="VM">
            <h1>$ Vending Machine $</h1>
            <h2>What would you like to buy?</h2>
            <img src="https://thumbs.dreamstime.com/b/empty-vending-machine-pink-background-d-rendering-computer-digital-drawing-228349497.jpg" />
            <p className="VM-links">
            <h3><Link to='/pepsi'>Pepsi</Link></h3>
            <h3><Link to='/cheetos'>Cheetos</Link></h3>
            <h3><Link to='/reese'>Reese's</Link></h3>
            </p>
        </div>
    )
}

export default Home