import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import useSWR from 'swr'
import AuthService from '../services/auth.service'
import Add from './Admin/Add/Add'

const fetcher = (url, token, body) =>
  axios.post(url, body).then((res) => res.data)

const BoardAdmin = () => {
  const { token } = AuthService.getCurrentUser()
  const [show, setShow] = useState(false)
  const [values, setValues] = useState(null)

  const url = 'http://192.168.0.6:5000/api/things'

  const { data, isValidating } = useSWR([url, token, values], fetcher)

  console.log(data)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addRow = (values) => {
    setValues(values)
  }

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Add New Thing
      </Button>
      <Add show={show} handleClose={handleClose} addRow={addRow} />
    </Container>
  )
}

export default BoardAdmin
