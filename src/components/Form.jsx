import React, { useState, useContext, useEffect } from 'react'
import { getIPAddressDetails } from '../common/api/adaptors'
import { getIPAddressEndpoint } from '../common/api/endpoint'
import { useFetch } from '../hooks/useFetch'
import { MyContext } from '../contexts/MyContextProvider'
import FormHeader from './FormHeader'
import FormMap from './FormMap'
import ErrorModal from './ErrorModal'
import Loading from './Loading'

const Form = () => {
    const { setAddressDetails, setAddressCords } = useContext(MyContext);
    const [ipAddress, setIpAddress] = useState('');
    const [showLoading, setShowLoading] = useState(true);

    const ipAddressEndpoint = getIPAddressEndpoint(ipAddress);
    const { data, loading } = useFetch(ipAddressEndpoint)
    const adaptedAddressData = getIPAddressDetails(data);

    const isValidIPAddress = !adaptedAddressData.status || adaptedAddressData.status === 'success'
    const hasAddressData = Object.keys(adaptedAddressData).length !== 0;


    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false)
        }, 2000)
        // update context values if hasAddressData is not empty and ip address is valid
        if (hasAddressData && isValidIPAddress) {
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
    }, [adaptedAddressData.ip, isValidIPAddress, hasAddressData, setAddressCords, setAddressDetails]);

    const handleIPAddress = (inputValue) => setIpAddress(inputValue)

    return (
        <div className='form'>
            {
                showLoading ? (
                    <Loading />
                    ) : (
                        <>
                            {loading && <Loading />}
                            <ErrorModal isValidIPAddress={isValidIPAddress} />
                            <FormHeader handleIPAddress={handleIPAddress} />
                            <FormMap />
                        </>
                )
            }
        </div>
    )
}

export default Form

