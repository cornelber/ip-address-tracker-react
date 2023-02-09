import React from 'react'

const FormDetails = () => {
  return (
    <div className='form-header-details'>
      <div className="deatils-wrapper">
        <div className="details-block">
          <p className='details-block-title'>IP Address</p>
          <h2 className='details-block-info'>192.212.174.101</h2>
        </div>
        <div className="details-block">
          <p className='details-block-title'>Location</p>
          <h2 className='details-block-info'>
            Brooklyn, NY 10001
          </h2>
        </div>
        <div className="details-block">
          <p className='details-block-title'>Timezone</p>
          <h2 className='details-block-info'>UTC -50:00</h2>
        </div>
        <div className="details-block">
          <p className='details-block-title'>Country Population</p>
          <h2 className='details-block-info'>146.642.412</h2>
        </div>
      </div>
    </div>
  )
}

export default FormDetails