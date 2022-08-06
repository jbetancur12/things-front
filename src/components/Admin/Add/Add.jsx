import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createThing, updateThing } from '../../../slices/things'

const initialValues = {
  name: '',
  mac: ''
}

const Add = (props) => {
  const dispatch = useDispatch()

  const isAddMode = !props.id

  const {
    setError, // eslint-disable-line
    handleSubmit,
    control,
    reset,
    formState: { errors },
    getValues,
    setValue
  } = useForm({ defaultValues: initialValues })

  const onHandleSubmit = () => {
    // event.preventDefault()
    if (isAddMode) {
      dispatch(createThing(getValues()))
        .unwrap()
        .then((data) => console.log(data))
    } else {
      dispatch(updateThing({ id: props.id._id, body: getValues() }))
        .unwrap()
        .then((data) => console.log(data))
    }

    // props.addRow(getValues())
    reset(initialValues)
    props.handleClose()
  }

  useEffect(() => {
    if (!isAddMode) {
      setValue('name', props.id.name, {
        shouldValidate: true
      })
      setValue('mac', props.id.mac, {
        shouldValidate: true
      })
    }
  }, [props.id])

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Form onSubmit={handleSubmit(onHandleSubmit)} onReset={reset}>
        <Modal.Header closeButton>
          {isAddMode ? 'Add New Thing' : 'Edit Thing'}
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='name' role='form'>
            <Form.Label>Name</Form.Label>
            <Controller
              control={control}
              rules={{ required: 'The thing name is required' }}
              name='name'
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.name}
                  placeholder='Enter thing name'
                />
              )}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mb-3' controlId='mac' role='form'>
            <Form.Label>Mac</Form.Label>
            <Controller
              control={control}
              rules={{
                required: 'MAC Address is required',
                pattern: {
                  value:
                    /^[0-9a-f]{1,2}([:])(?:[0-9a-f]{1,2}\1){4}[0-9a-f]{1,2}$/i,
                  message: 'Invalid MAC address'
                }
              }}
              name='mac'
              defaultValue=''
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Control
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  isInvalid={errors.mac}
                  placeholder='Enter the thing MAC eg. [AA:BB:CC:DD:EE:FF]'
                />
              )}
            />
            <Form.Control.Feedback type='invalid'>
              {errors.mac?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.handleClose}>
            Close
          </Button>
          <Button type='submit' variant='primary'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default Add
