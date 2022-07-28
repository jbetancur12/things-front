import './suffix '
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Layout from './components/Layout/Layout'
import MainRouter from './MainRouter'
import { Connector } from 'mqtt-react-hooks'
import { MQTTProvider } from './context/mqtt'

const App = () => {
  const options = {
    keepalive: 30,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    clientId: 'kwklkdlsk',
    username: '',
    password: '',
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  }

  return (
    <Connector brokerUrl="ws://192.168.0.6:8080" options={options}>
      <MQTTProvider>
        <Layout>
          <MainRouter />
        </Layout>
      </MQTTProvider>
    </Connector>
  )
}

export default App
