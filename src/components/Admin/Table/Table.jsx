import React from 'react'
import { Button, Table } from 'react-bootstrap'

const TableThings = (props) => {
  return (
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
                  onClick={() => props.updateRow(dt)}
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
  )
}

export default TableThings
