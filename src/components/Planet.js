import React from 'react'
import { Link } from 'react-router-dom'
import { addSpacesToNumber } from '../utils/utils'

const Planet = ({ planet: { name, climate, population }, planetID }) => {
    return (
        <div className="col-2-5 p-2">
            <Link to={location => ({ ...location, pathname: `/planet/${planetID}` })}>
                <div className="card bg-dark text-white cursor-pointer">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-warning text-center">{name.toUpperCase()}</h5>
                        <p className="card-text whiteSpace-pre-line">
                            Climate: {climate}
                        </p>
                        <p className="font-italic text-secondary">Population: {addSpacesToNumber(population)}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Planet
