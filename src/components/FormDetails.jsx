import React, { useContext } from 'react'
import { MyContext } from '../contexts/MyContextProvider'
import { convertOffsetToHours } from '../utils/convertOffsetToHours'

const FormDetails = () => {
    const { value } = useContext(MyContext)
    
    const seconds = value?.utc
    const hours = convertOffsetToHours(seconds)

    return (
        <div className='form-header-details'>
            <div className="deatils-wrapper">
                <div className="details-block">
                <p className='details-block-title'>IP Address</p>
                <h2 className='details-block-info'>{value?.ip || '192.212.174.101'}</h2>
                </div>
                <div className="details-block">
                <p className='details-block-title'>Location</p>
                <h2 className='details-block-info'>
                    {(value?.location && `${value?.location.city}, ${value?.location.country} ${value?.location.zip}`) || 'Brooklyn, NY 10001'}
                </h2>
                </div>
                <div className="details-block">
                <p className='details-block-title'>Timezone</p>
                <h2 className='details-block-info'>UTC {(hours) || '-05:00'}</h2>
                </div>
                <div className="details-block">
                <p className='details-block-title'>ISP</p>
                <h2 className='details-block-info'>{value?.isp || 'SpaceX Starlink'}</h2>
                </div>
            </div>
        </div>
    )
}

export default FormDetails