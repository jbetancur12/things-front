import React from 'react'
import clx from 'classnames'
import styles from './Devices.module.scss'
import { Link } from 'react-router-dom'

const Card = ({ devices }) => {
  console.log(devices)
  return (
    <div className='container'>
      <div className='row'>
        {devices.map((device) => (
          <div className='col-4' key={device._id}>
            <Link
              to={'/user?mac=' + device.mac}
              style={{ textDecoration: 'none' }}
            >
              <div className={clx('card', styles.devicesCard)}>
                <div className='card-body text-center'>
                  <h4>{device.name}</h4>
                  <p>{device.mac}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
