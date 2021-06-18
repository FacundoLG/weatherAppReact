import React, { useEffect } from 'react'
import '../assets/styles/principalData.css'
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation,BiWind,BiWorld } from "react-icons/bi";
import {WiHumidity} from "react-icons/wi"
import { connect } from 'react-redux';
import { getWeather } from '../redux/actions';
const PrincipalData = (props) => {
    const {weatherData} = props
    useEffect(() =>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&lang=es&units=metric&APPID=bd438ef2a0f3eafb7c14283739e9d036')
            .then(res => res.json())
            .then((data)=>{
                props.getWeather(data)
            })
    },[])
    const getLocation = () =>{
        navigator.geolocation.getCurrentPosition((position) => console.log(position))
        
    }
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
                    <h2>{weatherData.name}</h2>
                </div>
                
                <div className="weatherData">
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                    <h3>{weatherData.weather[0].description}</h3>
                    <h5>{weatherData.main.temp}ºC</h5>
                    <h5>{weatherData.main.feels_like}ºC</h5>
                </div>
                
                <div className="weatherData inline">
                    <div className="otherData">
                        <i><WiHumidity/></i>
                        <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div className="otherData">
                        <i><BiWind/></i>
                        <p>{weatherData.wind.speed}K/h</p>
                        <p>{weatherData.wind.deg}º</p>
                        {/* <p>{weatherData.wind.gust}</p> */}
                    </div>
                    <div className="otherData">
                        <i><BiWorld/></i>
                        <p>{weatherData.main.pressure}hPa</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>({
    weatherData: state.Data
})
const mapDistpachToProps = ({
        getWeather,
})

export default connect(mapStateToProps,mapDistpachToProps)(PrincipalData)