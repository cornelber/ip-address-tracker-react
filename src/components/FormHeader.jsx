import React, { useState } from 'react';
import FormDetails from './FormDetails';

const INPUT_TYPE = "text";
// const INPUT_PATTERN = "^([0-9a-fA-F]{4}:){7}[0-9a-fA-F]{4}$";
const INPUT_PLACEHOLDER = 'Search for any IP address or domain';
const BUTTON_TYPE = 'submit';


const FormHeader = (props) => {
  const { handleIPAddress } = props;
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    handleIPAddress(inputValue)
    
    // reset input value
    setInputValue('')
  }

  // save input value
  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='form-header'>
        <form id='form' onSubmit={handleSubmit}>
        <h1 className='form-title'>IP Address Tracker</h1>
        <div className="input-wrapper">
            <input 
            className='form-input' 
            type={INPUT_TYPE} 
            // pattern={INPUT_PATTERN} 
            placeholder={INPUT_PLACEHOLDER} 
            value={inputValue}
            onChange={handleInputValue} 
            />
            <button className='btn form-btn' type={BUTTON_TYPE} />
        </div>
        </form>
        <FormDetails />
    </div>
  )
}

export default FormHeader