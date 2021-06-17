import React from 'react'
import '../assets/styles/principalData.css'
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
const PrincipalData = () => {
    const getLocation = () =>{
        navigator.geolocation.getCurrentPosition((position) => console.log(position))
    }
    // "api.openweathermap.org/data/2.5/weather?q=Parana&appid=bd438ef2a0f3eafb7c14283739e9d036"
    return (
        <div className="principalData">
            <div className="nav">
                <div className="searchInput">
                    <input type="text" placeholder="type your location" />
                    <button className="icon"><BsSearch/></button>
                </div>
                <button className="icon big" onClick={getLocation}><BiCurrentLocation/></button>
            </div>
            <div className="data">
                <div>
                    <h4>"Location"</h4>
                </div>
                
                <div className="weatherData">
                    <img src="" alt="" />
                    <h5>"Description"</h5>
                </div>
                
                <div className="weatherData inline">
                    <div className="otherData">
                        <img src="" alt="" />
                        <p>"humedad"</p>
                    </div>
                    <div className="otherData">
                        <img src="" alt="" />
                        <p>"viento"</p>
                    </div>
                    <div className="otherData">
                        <img src="" alt="" />
                        <p>"aire"</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalData
