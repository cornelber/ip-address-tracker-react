import React from 'react'
import { formInputConstants } from '../common/constants/formInputConstants'

const FormInputField = ({
    inputValue,
    handleInputValue
}) => {
  return (
    <>
        <h1 className='form-title'>IP Address Tracker</h1>
        <div className="input-wrapper">
            <input 
            className='form-input' 
            type={formInputConstants.INPUT_TYPE} 
            required={formInputConstants.REQUIRED} 
            maxLength={formInputConstants.MAX_LENGTH}
            pattern={formInputConstants.INPUT_PATTERN}
            placeholder={formInputConstants.INPUT_PLACEHOLDER}
            value={inputValue}
            onChange={handleInputValue} 
            />
            <button className='btn form-btn' type='submit' />
        </div>
    </>
  )
}

export default FormInputField