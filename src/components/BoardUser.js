import React, { useState } from 'react'
import Select from './Select/Select'
import useSWR from 'swr'
import Calendar from './Calendar/Calendar'
import Chart from './Chart/Chart'
import AuthService from '../services/auth.service'
import axios from 'axios'

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { Authorization: 'Bearer ' + token } })
    .then((res) => res.data)

const dt = new Date()
dt.setHours(dt.getHours() - 24)

const BoardUser = () => {
  const { token } = AuthService.getCurrentUser()
  const [startDate, setStartDate] = useState(dt)
  const [endDate, setEndDate] = useState(new Date())
  const [value, setValue] = useState({ value: 'minute' })
  const [period, setPeriod] = useState(15)

  const url = `http://192.168.0.6:5000/api/sensor/data?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&unit=${
    value.value
  }&period=${period}`

  const { data } = useSWR([url, token], fetcher)

  const maxT = data && Math.max(...data.map((o) => o.averageT))
  const minT = data && Math.min(...data.map((o) => o.averageT))
  const maxH = data && Math.max(...data.map((o) => o.averageH))
  const minH = data && Math.min(...data.map((o) => o.averageH))

  const getUnitValue = (value) => {
    setValue(value)
    if (value.value === 'minute') {
      setPeriod(15)
    } else {
      setPeriod(1)
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div style={{ height: 600 }} className="col-12 col-md-9">
          <Chart data={data} />
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <Calendar
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="card">
            <Select getValue={getUnitValue} />
          </div>
          <div className="card">
            <p>maxT: {maxT && maxT.toFixed(2)} C°</p>
            <p>minT: {minT && minT.toFixed(2)} C°</p>
            <p>maxH: {maxH && maxH.toFixed(2)} %</p>
            <p>minH: {minH && minH.toFixed(2)} %</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardUser
