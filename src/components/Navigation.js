import React from 'react'
import { useHistory } from 'react-router-dom'

const Navigation = () => {
    const history = useHistory()

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div
                className="navbar-brand cursor-pointer font-italic"
                onClick={() => history.push('/')}
            >
                Stars Wars
            </div>
        </nav>
    )
}

export default Navigation
