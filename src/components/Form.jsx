import React, { useState, useContext, useEffect } from 'react'
import { getIPAddressDetails } from '../api/adaptors'
import { getIPAddressEndpoint } from '../api/endpoint'
import { useFetch } from '../utils/hooks/useFetch'
import { MyContext } from '../contexts/MyContextProvider'
import FormHeader from './FormHeader'
import FormMap from './FormMap'

const Form = () => {
    const [ipAddress, setIpAddress] = useState('');
    const { setValue } = useContext(MyContext);
    const [contextValueSet, setContextValueSet] = useState(false);

    const ipAddressEndpoint = getIPAddressEndpoint(ipAddress);
    const addressData = useFetch(ipAddressEndpoint)
    const adaptedAddressData = getIPAddressDetails(addressData);

    useEffect(() => {
        if (!contextValueSet && Object.keys(adaptedAddressData).length !== 0) {
            setValue(adaptedAddressData);
            setContextValueSet(true);
        }
    }, [adaptedAddressData]);

    const handleIPAddress = (inputValue) => {
        setIpAddress(inputValue)
    }

    return (
        <div className='form'>
            <FormHeader handleIPAddress={handleIPAddress}  />
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