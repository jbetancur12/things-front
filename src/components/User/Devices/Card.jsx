import React from 'react'

const Card = ({ devices }) => {
  console.log(devices)
  return (
    <div className='container'>
      <div className='row'>
        {devices.map((device) => (
          <div className='col-4' key={device._id}>
            <div className='card'>
              <div className='card-body text-center'>
                <h4>{device.name}</h4>
                <p>{device.mac}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
