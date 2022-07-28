import React, { useState } from 'react'
import useSWR from 'swr'
import Chart from './Chart/Chart'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const dt = new Date()
dt.setHours(dt.getHours() - 24)

const BoardUser = () => {
  const [startDate, setStartDate] = useState(dt)
  const [endDate, setEndDate] = useState(new Date())

  const url = `http://192.168.0.6:3000/api/sensors?startDate=${startDate
    .toISOString()
    .split('.')[0]
    .replace('T', ' ')}&endDate=${endDate
    .toISOString()
    .split('.')[0]
    .replace('T', ' ')}`

  const { data, error } = useSWR(url, fetcher)

  return (
    <div className="container">
      <div style={{ height: 600 }}>
        <Chart data={data} />
      </div>
    </div>
  )
}

export default BoardUser
