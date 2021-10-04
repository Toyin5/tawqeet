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
    ip:""
  })
  const addr = "https://api.ipify.org?format=json";
  const ipGetter = async(add) =>{
    try {
      const res = await axios.get(add)
      setIp({
        ip:res.ip
      })
      console.log(res)
      
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    ipGetter(addr);
  }, [addr])

  return (
    <div className="app">
    <Container className="container">
      <Header />
      <Main ip={ip.ip}/>
      <Footer />
    </Container>
    </div>
  );
}

export default App;