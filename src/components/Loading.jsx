import React from 'react'

const Loading = ({
    isLoading
}) => {
    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading-circle"></div>
            </div>
        )
    }

    return null;
}

export default Loading
