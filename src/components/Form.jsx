import React, { useState, useContext, useEffect } from 'react'
import { getIPAddressDetails } from '../api/adaptors'
import { getIPAddressEndpoint } from '../api/endpoint'
import { useFetch } from '../hooks/useFetch'
import { MyContext } from '../contexts/MyContextProvider'
import FormHeader from './FormHeader'
import FormMap from './FormMap'

const Form = () => {
    const [ipAddress, setIpAddress] = useState('');
    const { setAddressDetails } = useContext(MyContext);

    const ipAddressEndpoint = getIPAddressEndpoint(ipAddress);
    const addressData = useFetch(ipAddressEndpoint)
    const adaptedAddressData = getIPAddressDetails(addressData.data);

    const isValidIPAddress = adaptedAddressData.status === 'success'

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
        }
    }, [adaptedAddressData.ip]);

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
TODO:

catch err api,
show alert on err,
fixed headerDetails to not jump when content changed
add additional features to FormMap 
*/