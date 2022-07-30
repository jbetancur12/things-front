import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'minute', label: 'Minute' },
  { value: 'hour', label: 'Hour' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
  { value: 'year', label: 'Year' }
]

const _Select = (props) => {
  const [value, setValue] = useState({ value: 'minute', label: 'Minute' })
  const handleChange = (value) => {
    setValue(value)
    props.getValue(value)
  }

  return (
    <Select
      options={options}
      value={value}
      onChange={(value) => handleChange(value)}
    />
  )
}
export default _Select
