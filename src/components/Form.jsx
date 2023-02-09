import React, { useState } from 'react'
import FormHeader from './FormHeader'
import FormMap from './FormMap'

const Form = () => {
  const [ipAddress, setIpAddress] = useState('')

  const handleIPAddress = (inputValue) => {
    setIpAddress(inputValue)
  }

  return (
    <div className='form'>
        <FormHeader handleIPAddress={handleIPAddress} />
        <FormMap />
    </div>
  )
}

export default Form

/*
NOTES:

handleIPAddress takes input value from FormHeader.jsx
ipAddress save input value and should call API with filled IP 

*/