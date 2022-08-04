import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'

const Add = (props) => {
  const {
    setError,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    getValues
  } = useForm()

  const onHandleSubmit = (event) => {
    // event.preventDefault()
    props.addRow(getValues())
    props.handleClose()
  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Form onSubmit={handleSubmit(onHandleSubmit)} onReset={reset}>
        <Modal.Header closeButton>Add New Thing</Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name" role="form">
            <Form.Label>Name</Form.Label>
            <Controller
              control={control}
              rules={{ required: 'The thing name is required' }}
              name="name"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.name}
                  placeholder="Enter thing name"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="mac" role="form">
            <Form.Label>Mac</Form.Label>
            <Controller
              control={control}
              rules={{
                required: 'MAC Address is required',
                pattern: {
                  value:
                    /^[0-9a-f]{1,2}([:])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/i,
                  message: 'invalid MAC address'
                }
              }}
              name="mac"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.mac}
                  placeholder="Enter the thing MAC"
                />
              )}
            />
            <Form.Control.Feedback type="invalid">
              {errors.mac?.message}
            </Form.Control.Feedback>
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
      </Form>
    </Modal>
  )
}

export default Add
