import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Add = (props) => {
  const [formData, setFormData] = useState({ name: '', mac: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addRow(formData)
    setFormData({ name: '', mac: '' })
    props.handleClose()
  }

  const handleChange = (event) => {
    event.preventDefault()
    const data = {
      ...formData,
      [event.target.name]: event.target.value
    }
    setFormData(data)
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>Add New Thing</Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            role="form">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Humidity"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlInput1"
            role="form">
            <Form.Label>Mac</Form.Label>
            <Form.Control
              type="text"
              placeholder="34:C4..."
              name="mac"
              onChange={handleChange}
              value={formData.mac}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default Add
