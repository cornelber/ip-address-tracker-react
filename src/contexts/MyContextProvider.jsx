import React, { createContext, useState} from 'react'

// Create context
export const MyContext = createContext();

// Provider component
const MyContextProvider = (props) => {
    const [addressDetails, setAddressDetails] = useState({
        ip: '192.212.174.101',
        city: 'Brooklyn',
        country: 'NY',
        zip: '10001',
        utc: '-05:00',
        isp: 'SpaceX Starlink'
    });
    const [addressCoords, setAddressCords] = useState(null);
    const [status, setStatus] = useState(null)

    return (
        <MyContext.Provider value={{
            addressDetails, setAddressDetails,
            addressCoords, setAddressCords,
            status, setStatus
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider