import debounce from 'lodash.debounce'
import React, { useState } from 'react'
import AsyncSelect from 'react-select/async'

const f = (data) =>
  data.map((option) => ({
    value: option._id,
    label: option.email
  }))

const _loadSuggestions = (i, cb) => {
  // const res = await fetch("http://192.168.0.6:5000/api/users/" + i)
  // const data = await res.json()
  // const options = data.map(option => ({
  //   value: option._id,
  //   name: option.email
  // }))
  // cb(options)

  fetch('http://192.168.0.6:5000/api/users/' + i)
    .then((resp) => resp.json())
    .then((json) => cb(f(json)))
}

const loadSuggestions = debounce(_loadSuggestions, 3000)

function SearchboxTest () {
  const [inputValue, setInputValue] = useState('')

  const onChange = (value) => {
    setInputValue(value)
  }

  return (
    <AsyncSelect
      value={inputValue}
      loadOptions={loadSuggestions}
      placeholder='text'
      onChange={onChange}
    />
  )
}

export default SearchboxTest
