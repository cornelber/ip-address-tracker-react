import React from 'react'

const FormDetailsBlock = ({
    title,
    value
}) => {
  return (
    <div className="details-block">
        <p className='details-block-title'>{title}</p>
        <h2 className='details-block-info'>{value}</h2>
    </div>
  )
}

export default FormDetailsBlock