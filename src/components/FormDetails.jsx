import React, { useState, useEffect, useContext } from 'react'
import { convertOffsetToHours } from '../js/utils'
import { MyContext } from '../contexts/MyContextProvider'
import FormDetailsBlock from './FormDetailsBlock'

const FormDetails = () => {
    const { addressDetails } = useContext(MyContext);
    const [initialRender, setInitialRender] = useState(true);
    const [utc, setUtc] = useState(`UTC ${addressDetails.utc}`)
    
    const { ip, isp, city, country, zip } = addressDetails
    const location = `${city}, ${country} ${zip}`

    // Update the second timezone variable using useEffect hook
    useEffect(() => {
        if(!initialRender) {
            setUtc(convertOffsetToHours(addressDetails.utc))
        } else {
            setInitialRender(false)
        }
    }, [addressDetails.utc]);

    return (
        <div className='form-header-details'>
            <div className="deatils-wrapper">
                <FormDetailsBlock title='IP Address' value={ip} />
                <FormDetailsBlock title='Location' value={location} />
                <FormDetailsBlock title='Timezone' value={utc} />
                <FormDetailsBlock title='ISP' value={isp} />
            </div>
        </div>
    )
}

export default FormDetails