import React, { useCallback, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { deleteThing, retrieveThings } from '../slices/things'
import Add from './Admin/Add/Add'
import Table from './Admin/Table/Table'

const BoardAdmin = () => {
  const [show, setShow] = useState(false)

  // const url = 'http://192.168.0.6:5000/api/things'

  // const { data, isValidating } = useSWR([url, token, values], fetcher)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const deleteRow = (id) => {
    dispatch(deleteThing({ id }))
      .unwrap()
      .then((data) => {
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  // *************************************************************

  const things = useSelector((state) => state.things)
  const dispatch = useDispatch()
  const initFetch = useCallback(() => {
    dispatch(retrieveThings())
  }, [dispatch])
  useEffect(() => {
    initFetch()
  }, [initFetch])

  return (
    <Container>
      <Button variant='primary' onClick={handleShow} className='mb-3'>
        Add New Thing
      </Button>
      <Add show={show} handleClose={handleClose} />
      <Table data={things} deleteRow={deleteRow} />
    </Container>
  )
}

export default BoardAdmin
