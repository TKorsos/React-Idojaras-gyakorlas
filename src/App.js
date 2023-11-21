import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Varos from "./components/Varos";
import Idojaras from "./components/Idojaras";

// https://geocoding-api.open-meteo.com/v1/search?name=Budapest
// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum

export default function App() {
  const [idojarasInfo, setIdojarasInfo] = useState("");

  function idojarasVaros(varos) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${varos.latitude}&longitude=${varos.longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant`)
    .then( res => res.json())
    .then(res => {
      setIdojarasInfo({
        varos,
        idojaras: res
      });
    })
  }

  function frissitVaros(varos) {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${varos}`)
    .then(res => res.json())
    .then(res => {
      idojarasVaros(res.results[0]);
    })
  }


  return <main className="container-lg py-5">
    <section className="row row-cols-1">
      <Varos frissitVaros={frissitVaros} />
      <Idojaras idojarasInfo={idojarasInfo} />
    </section>
  </main>;
}