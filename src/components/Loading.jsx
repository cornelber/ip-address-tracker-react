import React from 'react'

const Loading = () => {
    return (
        <div className="loading">
            <div className="lds-ripple">
                <div className="lds-ripple-child"></div>
                <div className="lds-ripple-child"></div>
            </div>
        </div>
    )
}

export default Loading
