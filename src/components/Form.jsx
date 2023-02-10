import React, { useState, useContext, useEffect } from 'react'
import { getIPAddressDetails } from '../common/api/adaptors'
import { getIPAddressEndpoint } from '../common/api/endpoint'
import { useFetch } from '../hooks/useFetch'
import { MyContext } from '../contexts/MyContextProvider'
import FormHeader from './FormHeader'
import FormMap from './FormMap'
import ErrorModal from './ErrorModal'

const Form = () => {
    const [ipAddress, setIpAddress] = useState('');
    const { setAddressDetails, setAddressCords } = useContext(MyContext);

    const ipAddressEndpoint = getIPAddressEndpoint(ipAddress);
    const addressData = useFetch(ipAddressEndpoint)
    const adaptedAddressData = getIPAddressDetails(addressData.data);
    
    const isValidIPAddress = !adaptedAddressData.status || adaptedAddressData.status === 'success'

    useEffect(() => {
        if (Object.keys(adaptedAddressData).length !== 0 && isValidIPAddress) {
            setAddressDetails({
                ip: adaptedAddressData.ip,
                city: adaptedAddressData.location.city,
                country: adaptedAddressData.location.country,
                zip: adaptedAddressData.location.zip,
                utc: adaptedAddressData.utc,
                isp: adaptedAddressData.isp,
            });
            setAddressCords({
                lat: adaptedAddressData.coordinates.lat,
                lng: adaptedAddressData.coordinates.lng,
            });
        }
    }, [adaptedAddressData.ip, isValidIPAddress, setAddressCords, setAddressDetails]);

    const handleIPAddress = (inputValue) => {
        setIpAddress(inputValue)
    }    

    return (
        <div className='form'>
            <ErrorModal isValidIPAddress={isValidIPAddress} />
            <FormHeader handleIPAddress={handleIPAddress} />
            <FormMap />
        </div>
    )
}

export default Form

/*
TODO:

-add loading functionality,
-refactor scss
-refactor code
*/