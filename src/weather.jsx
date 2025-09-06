import { useState } from "react"
import axios from "axios"

function Weather() {
    const[city,setcity] = useState("")
    const[weather,setweather] = useState("")
    const[temp,setTemp] = useState("")
    const[desc,setdesc] = useState("")
    var handleCity=(e)=>{setcity(e.target.value)}
    function getWeather(){
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a36f02b9d0d210de0597cff15ca0a15e`)
        weatherdata.then(function(success)
        {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setTemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
        weather.catch(function(failed){
            
        })
    

    }
    return (
        <div className="bg-[#4BDE81] m-[8vw] p-[2vw] flex-col justify-center items-center border rounded-md flex-wrap">
            <h1 className="text-3xl font-medium py-2">Weather app</h1>
            <p>I can give you a weather report about your city</p>
            <input type="text" className="border-black focus:outline-none rounded-md p-1 my-3" value={city} onChange={handleCity}/><br />
            <button className="bg-black text-white p-2 border rounded-md border-none" onClick={getWeather}>Get Report</button>
            <div className="font-medium flex flex-col gap-2 my-2">
                <p>Weather: {weather}</p>
                <p>Temperature: {temp}</p>
                <p>Description: {desc}</p>
            </div>
        </div>
    )
}
export default Weather