import React, { createContext, useState} from 'react'

// Create context
export const MyContext = createContext()

// Provider component
const MyContextProvider = (props) => {
    const [addressDetails, setAddressDetails] = useState({
        ip: '192.212.174.101',
        city: 'Brooklyn',
        country: 'NY',
        zip: '10001',
        utc: '-05:00',
        isp: 'SpaceX Starlink'
    })
    const [addressCoords, setAddressCords] = useState({
        lat: 40.650002,
        lng: -73.949997,
    })

    return (
        <MyContext.Provider value={{
            addressDetails, setAddressDetails,
            addressCoords, setAddressCords,
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider