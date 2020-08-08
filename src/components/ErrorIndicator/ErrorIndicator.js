import React from 'react'
import './ErrorIndicator.css'

const ErrorIndicator = () => {
    return (
        <div className='text-danger font-weight-bold error-indicator'>
            <span className='boom text-danger font-weight-bold'>BOOM!!!</span>
            <span className='text-break'>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator