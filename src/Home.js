import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <h1>WelCome to new Data Visualization Site of 2021</h1>
            <h4>We Provide You the Best Visualization</h4>
            <p style={{fontSize:"1.5rem"}}>Enjoy!!</p>
            <div style={{display:"flex",flexDirection:"column"}}>
                <Link style={{textDecoration:"none", marginBottom:"1rem"}} to="/scattered">
                    <button style={{background: "lightblue",borderRadius:"6px", height:"2rem" }}>
                    Go to Scattered Plot of Iris Flower
                    </button>
                </Link>
                <Link style={{textDecoration:"none",marginBottom:"1rem"}} to="/barchart">
                    <button style={{background: "lightblue",borderRadius:"6px", height:"2rem" }}>
                        Go to Bar Chart of Meat Consumed in Nepal
                    </button>
                </Link>
                <Link style={{textDecoration:"none"}} to="/linedata">
                    <button style={{background: "lightblue",borderRadius:"6px", height:"2rem" }}>
                        Go to Line Graph of Temperature this Week
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
