import React, { createContext, useState} from 'react'

// Create context
export const MyContext = createContext();

// Provider component
const MyContextProvider = (props) => {
    const [value, setValue] = useState(null);

    return (
        <MyContext.Provider value={{value, setValue}}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider