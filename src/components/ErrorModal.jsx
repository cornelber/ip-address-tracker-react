import React, { useState } from 'react'

const ErrorModal = ({
    isValidIPAddress
}) => {
    const [showModal, setShowModal] = useState(isValidIPAddress)
    
    const handleModalView = () => setShowModal(!showModal)

    if (!isValidIPAddress && showModal) {
        return (
            <button  onClick={handleModalView}>
                <div className='error-modal'>
                    <h2 className='error-info'>
                        The IP address might not be found due to incorrect format, being private/local, or not being in the ip-api.com database.
                    </h2>
                </div>
            </button>
        )
    }

    return null;
}

export default ErrorModal