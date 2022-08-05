import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

import ThingService from '../services/things.service'
import Add from './Admin/Add/Add'
import Table from './Admin/Table/Table'

const BoardAdmin = () => {
  const [show, setShow] = useState(false)
  const [values, setValues] = useState(null)
  const [things, setThings] = useState(null)

  // const url = 'http://192.168.0.6:5000/api/things'

  // const { data, isValidating } = useSWR([url, token, values], fetcher)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addRow = (values) => {
    ThingService.createThing(values).then((data) => {
      if (data.status === 200) setValues(values)
    })
  }
  const deleteRow = (id) => {
    ThingService.deleteThing(id).then((data) => {
      if (data.status === 200) {
        const _things = things && things.filter((thing) => thing._id !== id)
        setValues(_things)
      }
    })
  }

  useEffect(() => {
    ThingService.getThings().then((data) => setThings(data.data))
  }, [values])

  return (
    <Container>
      <Button variant='primary' onClick={handleShow} className='mb-3'>
        Add New Thing
      </Button>
      <Add show={show} handleClose={handleClose} addRow={addRow} />
      <Table data={things} deleteRow={deleteRow} />
    </Container>
  )
}

export default BoardAdmin
