import React, { useState } from 'react'

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
    <div className="modal" show={props.show} onHide={props.handleClose}>
      <form onSubmit={handleSubmit}>
        <div className="modal-header" closeButton>
          Add New Thing
        </div>
        <div className="modal-body">
          <div
            className="form-group mb-3"
            controlId="exampleForm.ControlInput1"
            role="form">
            <label>Name</label>
            <div
              className="form-control"
              type="text"
              placeholder="Humidity"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div
            className="form-group mb-3"
            controlId="exampleForm.ControlInput1"
            role="form">
            <label>Mac</label>
            <div
              className="form-control"
              type="text"
              placeholder="34:C4..."
              name="mac"
              onChange={handleChange}
              value={formData.mac}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" variant="secondary" onClick={props.handleClose}>
            Close
          </button>
          <button type="submit" variant="primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
