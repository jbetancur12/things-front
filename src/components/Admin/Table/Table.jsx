import React from 'react'
import { Table } from 'react-bootstrap'

const TableThings = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map((dt) => (
            <tr key={dt._id}>
              <td>{dt._id}</td>
              <td>{dt.name}</td>
              <td>{dt.mac}</td>
              <td>{dt.createdAt}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default TableThings
