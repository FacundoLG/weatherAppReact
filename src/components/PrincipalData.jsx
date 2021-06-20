import React, { useEffect } from 'react'
import '../assets/styles/principalData.css'
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation,BiWind,BiWorld } from "react-icons/bi";
import {WiHumidity} from "react-icons/wi"
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { getWeather } from '../redux/actions';
const PrincipalData = (props) => {
    const {weatherData} = props
    var key = 'bd438ef2a0f3eafb7c14283739e9d036'
    useEffect(() =>{
        getWeather("London",key)
    },[key])
    const handleSearch = () =>{
        var text = document.getElementById("searchInput").value
        console.log(text)
        getWeather(text,key)
        
    }
    const getWeather = (searchText,key) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText},uk&lang=es&units=metric&APPID=${key}`)
            .then(res => res.json())
            .then((data)=>{
                props.getWeather(data)
                console.log(data)
            })
    }
    const getLocation = (key) =>{
        navigator.geolocation.getCurrentPosition((position) =>{ 
            var {latitude,longitude} = position.coords
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${key}`)
                .then(res => res.json())
                .then((data)=>{
                props.getWeather(data)
                })
        })
        
        

    }
    return (
        <div className="principalData">
            <div className="nav">
                <div className="searchInput">
                    <input type="text" id="searchInput" placeholder="type your location" />
                    <button className="icon" onClick={handleSearch}><BsSearch/></button>
                </div>
                <button className="icon big" onClick={() => getLocation(key)}><BiCurrentLocation/></button>
            </div>
            {weatherData.name ?
            <>
            <div className="data">
                <div>
                    <h2>{weatherData.name}</h2>
                    <h3>{weatherData.weather[0].description}</h3>

                </div>                
                <div className="weatherData">
                    <div className="tempAndImg">
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                        <div>
                            <h5 className="temp">{Math.floor(weatherData.main.temp)}ºC</h5>       
                        </div>
                    </div>
                    <h5 className="feelslike">feels like {Math.floor(weatherData.main.feels_like)}ºC</h5>
                </div>
                <div className="secondaryData">
                    <div className="otherData">
                        <i><WiHumidity/></i>
                        <p>{weatherData.main.humidity}%</p>
                    </div>
                    <div className="otherData">
                        <i><BiWind/></i>
                        <p>{weatherData.wind.speed}K/h</p>
                        <p>{weatherData.wind.deg}º</p>
                    </div>
                    <div className="otherData">
                        <i><BiWorld/></i>
                        <p>{weatherData.main.pressure}hPa</p>                        
                    </div>
                </div>
            </div>
        </>
        :
        <div className="loading">
            <CircularProgress/>
        </div>
        }
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