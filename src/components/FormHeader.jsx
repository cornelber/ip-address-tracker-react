import React, { useState } from 'react';
import FormDetails from './FormDetails';
import FormInputField from './FormInputField';

const FormHeader = ({
  handleIPAddress
}) => {
  // store the input value
  const [inputValue, setInputValue] = useState('')

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // sent input value to parent component
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
          <FormInputField  inputValue={inputValue} handleInputValue={handleInputValue} />
        </form>
        <FormDetails />
    </div>
  )
}

export default FormHeader