import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Add from '../Add/Add'

const TableThings = (props) => {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(null)

  const handleClose = () => {
    setId(null)
    setShow(false)
  }

  const openModal = (id) => {
    setId(id)
    setShow(true)
  }

  return (
    <>
      <Add show={show} handleClose={handleClose} id={id} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Thing</th>
            <th>MAC</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((dt) => (
              <tr key={dt._id}>
                <td>{dt.name}</td>
                <td>{dt.mac}</td>
                <td>
                  <Button
                    type='button'
                    className='btn mr-3'
                    onClick={() => openModal(dt)}
                  >
                    Edit
                  </Button>
                  <Button
                    type='button'
                    className='btn  btn-danger'
                    onClick={() => props.deleteRow(dt._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  )
}

export default TableThings
