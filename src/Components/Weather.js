import React, {useEffect, useState } from "react";
import "./Css/Style2.css";
import axios from 'axios';

const Weather = () =>{
   const[city1, setCity1]=useState("Pune");
   const[data, setData]=useState({});
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&units=metric&appid=762df1bce2462ebed432ebcbf9810484`
   const urlicon = `https://openweathermap.org/img/wn/${ data.weather ? data.weather[0].icon : "10d"}@2x.png`

const addcity = (event) =>{
    setCity1(event.target.value);
}

useEffect(()=>{
    const app = () =>{
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
          })
    }
    app();
},[""]);

const setLocation = () =>{
    axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    setCity1("");
   }

    return(
        <>
        <div>
            
                <div className="search d-flex">
                    <input className="input_search" type="search" placeholder="Enter Location" onChange={addcity} value={city1}/>
                    <button className="btn btn-primary btns" onClick={setLocation}>Search</button>
                </div>

                <div className="location d-flex justify-content-center">
                    <span>{data.name}</span>
                </div>
            <div className="mid_body">
                <div>
                <div className="tempo d-flex justify-content-center">
                    <span> {data.main ? <span>{data.main.temp.toFixed()}°C</span> : null}</span>
                </div>
                <div className="d-flex justify-content-center">
                <span className="pe-2 fs-5">{data.main ? <span>Min: {data.main.temp_min.toFixed()}°C</span> : null}</span>
                <span className="ps-2 fs-5">{data.main ? <span>Max: {data.main.temp_max.toFixed()}°C</span> : null}</span>
                </div>
                </div>
                <div>
                
                    <div className="description">
                        <span>
                           <img src={urlicon} alt="Weather description" />
                        </span>
                        <span>
                        {data.weather ? <span>{data.weather[0].main}</span> : null}
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <span>
                            Feels Like
                        </span>
                        <span className="bolds">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                        </span>
                    </div>
                    <div>
                        <span>
                            Humidity
                        </span>
                        <span className="bolds">
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                        </span>
                       
                    </div>
                    <div>
                        <span>
                            Wind speed
                        </span>
                        <span className="bolds">
                        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KMH</p> : null}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Weather;