import React, { useEffect, useState } from 'react'
import AuthService from '../../../services/auth.service'
import ThingService from '../../../services/things.service'
import Card from './Card'

const Devices = () => {
  const { user } = AuthService.getCurrentUser()
  const [Things, setThings] = useState([])

  console.log(user)

  useEffect(() => {
    ThingService.getUserThings(user._id).then((res) => setThings(res.data))
  }, [])

  return <Card devices={Things} />
}

export default Devices
