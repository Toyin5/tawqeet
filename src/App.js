import React from 'react';
import {useEffect, useState} from "react";
import {Container} from "@material-ui/core"
import './styles/App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import axios from 'axios';

function App() {
  const [ip, setIp] = useState({
    ip:JSON.parse(localStorage.getItem("ip")) || {},
  })
  const addr = "https://json.geoiplookup.io/";
  const ipGetter = async(add) =>{
    try {
      const res = await axios.get(add);
      setIp(() => {
        localStorage.setItem('ip', JSON.stringify(res.data.ip))
        localStorage.setItem('city', JSON.stringify(res.data.city))
        return{
          ip:res.data.ip
        }
      })
    } catch (e) {
      console.log(e);
    }
  }
  console.log(ip)
  useEffect(() => {
    ipGetter(addr);
  }, [addr])

  return (
    <div className="app">
      <Container className="container">
        <Header />
        <Main />
        <Footer />
      </Container>
    </div>
  );
}

export default App;