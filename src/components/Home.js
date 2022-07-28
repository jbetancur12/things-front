import React, { useState } from 'react'
import { useMQTT } from '../context/mqtt'

const Home = () => {
  const { temperature, humidity } = useMQTT()

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{temperature}</h3>
        <h3>{humidity}</h3>
      </header>
    </div>
  )
}

export default Home
