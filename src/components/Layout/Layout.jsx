import { useSubscription } from 'mqtt-react-hooks'
import React, { useEffect } from 'react'
import { useMQTT } from '../../context/mqtt'
import Header from '../Header/Header'

const Layout = ({ children }) => {
  const { message } = useSubscription(['json'])

  const { setTemp, setHumidity } = useMQTT()

  useEffect(() => {
    if (message?.topic === 'json') {
      const { temperature, humidity } = JSON.parse(message.message)
      setTemp(temperature)
      setHumidity(humidity)
    }
  }, [message])

  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
