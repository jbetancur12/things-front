import React, { useState } from 'react'
import Select from './Select/Select'
import useSWR from 'swr'
import Calendar from './Calendar/Calendar'
import Chart from './Chart/Chart'
import AuthService from '../services/auth.service'
import axios from 'axios'
import { useMQTT } from '../context/mqtt'
import { FaTemperatureLow } from 'react-icons/fa'
import { BsDropletHalf } from 'react-icons/bs'
import { Card, Col, Container, Row } from 'react-bootstrap'

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { Authorization: 'Bearer ' + token } })
    .then((res) => res.data)

const dt = new Date()
dt.setHours(dt.getHours() - 24)

const BoardUser = () => {
  const { token } = AuthService.getCurrentUser()
  const { temperature, humidity } = useMQTT()
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
    <Container>
      <Row>
        <Col style={{ height: 600 }} md={9}>
          <Chart data={data} />
        </Col>
        <Col md={3}>
          <Card>
            <div className="ml-3">
              <FaTemperatureLow /> <span>{Number(temperature).toFixed(2)}</span>{' '}
              C°
            </div>
            <div className="ml-3">
              <BsDropletHalf /> <span>{humidity}</span> %
            </div>
          </Card>
          <Card>
            <Select getValue={getUnitValue} />
            <p />
            <Calendar
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </Card>
          <Card>
            <p>maxT: {maxT && maxT.toFixed(2)} C°</p>
            <p>minT: {minT && minT.toFixed(2)} C°</p>
            <p>maxH: {maxH && maxH.toFixed(2)} %</p>
            <p>minH: {minH && minH.toFixed(2)} %</p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BoardUser
