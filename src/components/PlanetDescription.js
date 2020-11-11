import React from 'react'
import { useParams } from 'react-router-dom'

const PlanetDescription = () => {
    const { planetID } = useParams()

    return (
        <div className="bg-dark rounded text-white mt-5 ml-3 mr-3 p-3 cursor-default">
            <div className="d-flex flex-column">
                <h5 className="text-warning text-center">{planetID}</h5>
                <p className="whiteSpace-pre-line">Climate: arid</p>
                <p className="text-secondary">Population: 200 000</p>
            </div>
        </div>
    )
}

export default PlanetDescription
