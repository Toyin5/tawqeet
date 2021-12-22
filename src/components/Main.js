import axios from 'axios';
import {Container} from "@material-ui/core"
import { useEffect, useState } from "react";
import {addTime} from "../times";
import "../styles/Main.css"
function Main() {
    const [dataApi, setDataApi] = useState({
        solah: JSON.parse(localStorage.getItem("solah")) || {},
        dates: JSON.parse(localStorage.getItem("dates")) || {}
    })
    const solahAPi = async() => {
        try {
        const data = await axios.get(`https://api.pray.zone/v2/times/today.json?ip=${JSON.parse(localStorage.getItem('ip'))}`)
          setDataApi(() => {
            localStorage.setItem('solah', JSON.stringify(data.data.results.datetime[0].times))
            localStorage.setItem('dates', JSON.stringify(data.data.results.datetime[0].date))
              return {
                  solah: data.data.results.datetime[0].times,
                  dates: data.data.results.datetime[0].date,
              }
          })
        console.log(data)
        } catch (e) {
          console.log(e);
        }
      }

    
        
    useEffect(() => {
        solahAPi();
    }, [])
    let date = new Date();
    let day = `${date.toString().split(" ")[0]}`;

    const [time, setTime] = useState(date.toString().split(" ")[4])

    useEffect(() => {
        const interval = setInterval(() => setTime(date.toString().split(" ")[4]), 1000);
        return () => clearInterval(interval);
    })

    return (
        <Container>
        <div className="main">
            <div className="current_date">
                <p>{dataApi.dates.gregorian}</p>
            </div>
            <div className="current_day">
                <p>{day}</p>
            </div>
            <div className="current_time">
                <p>{time}</p>
            </div>
            <div className="header_div">
                <p>Adhan</p>
                <p className="city">{JSON.parse(localStorage.getItem('city'))}</p>
                <p>Iqamah</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Fajr}</p>
                <p>Fajr</p>
                <p>{addTime(dataApi.solah.Fajr,"00:20").slice(0,-3)}</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Dhuhr}</p>
                <p>Dhuhr</p>
                <p>{addTime(dataApi.solah.Dhuhr, "00:20").slice(0,-3)}</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Asr}</p>
                <p>Asr</p>
                <p>{addTime(dataApi.solah.Asr, "00:20").slice(0,-3)}</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Maghrib}</p>
                <p>Magrib</p>
                <p>{addTime(dataApi.solah.Maghrib, "00:20").slice(0,-3)}</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Isha}</p>
                <p>Isha</p>
                <p>{addTime(dataApi.solah.Isha, "00:20").slice(0,-3)}</p>
            </div>
        </div>
        </Container>
    )
}

export default Main
