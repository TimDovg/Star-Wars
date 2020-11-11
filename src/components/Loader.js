import React from 'react'

const Loader = () => (
    <div className="d-flex justify-content-center pt-5 col-sm-12 h-100 align-items-center h-100">
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)

export default Loader
