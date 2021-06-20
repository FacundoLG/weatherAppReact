import React from 'react'
import PrincipalData from '../components/PrincipalData'
import Graphic from '../components/Graphic'
import '../assets/styles/Home.css'
const Home = () => {
    return (
            <div className="home">
                <PrincipalData/>
                <div>
                    <Graphic/>
                </div>
            </div>
    )
}

export default Home
