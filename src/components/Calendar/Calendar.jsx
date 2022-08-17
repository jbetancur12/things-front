import React from 'react'
import ReactDatePicker from 'react-datepicker'

const Calendar = (props) => {
  return (
    <>
      <label htmlFor='from'>From:</label>
      <ReactDatePicker
        selected={props.startDate}
        onChange={(date) => props.setStartDate(date)}
        showTimeInput
        timeIntervals={15}
        dateFormat='Pp'
        placeholderText='Start date'
        className='input'
        id='from'
      />
      <label htmlFor='since' className='mt-3'>
        Since:
      </label>
      <ReactDatePicker
        selected={props.endDate}
        onChange={(date) => props.setEndDate(date)}
        showTimeInput
        timeIntervals={15}
        dateFormat='Pp'
        placeholderText='End date'
        className='input'
        id='since'
      />
    </>
  )
}

export default Calendar
