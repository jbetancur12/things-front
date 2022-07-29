import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'minute', label: 'Minute' },
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
]

const _Select = () => <Select options={options} />

export default _Select
