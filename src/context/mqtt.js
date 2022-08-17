import { createContext, useState, useContext } from 'react'

const MQTTContext = createContext({
  temperature: 0,
  setTemp: () => {},
  humidity: 0,
  setHumidity: () => {}
})

export const MQTTProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(0)
  const [humidity, setHumidity] = useState(0)

  const setTemp = (value) => setTemperature(value)

  return (
    <MQTTContext.Provider
      value={{ temperature, setTemp, humidity, setHumidity }}
    >
      {children}
    </MQTTContext.Provider>
  )
}

export const useMQTT = () => useContext(MQTTContext)
