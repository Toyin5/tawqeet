import axios from 'axios';
import {Container} from "@material-ui/core"
import { useEffect, useState } from "react";
import "../styles/Main.css"
function Main({ip}) {
    const [dataApi, setDataApi] = useState({
        solah: JSON.parse(localStorage.getItem("solah")) || {},
        dates: JSON.parse(localStorage.getItem("dates")) || {},
        city:""
    })
    const solahAPi = async(ip) => {
        try {
        const data = await axios.get(`https://api.pray.zone/v2/times/today.json?ip=${ip}`)
          setDataApi(() => {
            localStorage.setItem('solah', JSON.stringify(data.data.results.datetime[0].times))
            localStorage.setItem('dates', JSON.stringify(data.data.results.datetime[0].date))
              return {
                  solah: data.data.results.datetime[0].times,
                  dates: data.data.results.datetime[0].date,
                  city:""
              }
          })
        console.log(data)
        } catch (e) {
          console.log(e);
        }
      }

    
        
    useEffect(() => {
        solahAPi(ip);
    },[ip])
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
                <p>{dataApi.dates.hijri}</p>
            </div>
            <div className="current_day">
                <p>{day}</p>
            </div>
            <div className="current_time">
                <p>{time}</p>
            </div>
            <div className="header_div">
                <p>Iqamah</p>
                <p>------</p>
                <p>Adhan</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Fajr}</p>
                <p>Fajr</p>
                <p>----</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Dhuhr}</p>
                <p>Dhuhr</p>
                <p>04:28</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Asr}</p>
                <p>Asr</p>
                <p>04:28</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Maghrib}</p>
                <p>Magrib</p>
                <p>04:28</p>
            </div>
            <div className="solah_div">
                <p>{dataApi.solah.Isha}</p>
                <p>Isha</p>
                <p>04:28</p>
            </div>
        </div>
        </Container>
    )
}

export default Main
