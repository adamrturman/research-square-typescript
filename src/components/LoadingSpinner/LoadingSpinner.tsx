import React from 'react'
import { Spinner } from 'react-bootstrap';

function LoadingSpinner() {
    return (
        <div>
            <Spinner animation="border" variant="primary" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div >
    )
}

export default LoadingSpinner