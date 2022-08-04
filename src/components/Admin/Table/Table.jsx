import React from 'react'
import { Table } from 'react-bootstrap'

const TableThings = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Thing</th>
          <th>MAC</th>
        </tr>
      </thead>
      <tbody>
        {props.data &&
          props.data.map((dt) => (
            <tr key={dt._id}>
              <td>{`${dt._id.slice(0, 4)}...${dt._id.slice(-4)}`}</td>
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
