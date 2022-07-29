import React, { useState } from 'react'
import useSWR from 'swr'
import Calendar from './Calendar/Calendar'
import Chart from './Chart/Chart'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const dt = new Date()
dt.setHours(dt.getHours() - 24)

const BoardUser = () => {
  const [startDate, setStartDate] = useState(dt)
  const [endDate, setEndDate] = useState(new Date())

  const url = `http://192.168.0.6:5000/api/sensor?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`

  const { data, error } = useSWR(url, fetcher)

  console.log(url)

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
        </div>
      </div>
    </div>
  )
}

export default BoardUser
