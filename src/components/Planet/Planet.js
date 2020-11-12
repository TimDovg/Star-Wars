import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { addSpacesToNumber } from '../../utils/utils'

import styles from './PlanetStyles.module.scss'

const Planet = ({ planet: { name, climate, population }, planetID }) => {
    const { current: planetStyles } = useRef(`card bg-dark text-white cursor-pointer ${styles.planet}`)

    return (
        <div className="col-2-5 p-2">
            <Link to={location => ({ ...location, pathname: `/planet/${planetID}` })}>
                <div className={planetStyles}>
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
