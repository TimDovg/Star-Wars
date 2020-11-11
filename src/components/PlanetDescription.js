import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import StarWarsAxios from '../axios/StarWarsAxios'
import Loader from './Loader'
import { addSpacesToNumber } from '../utils/utils'
import AdditionalList from './AdditionalList'
import Alert from './Alert/Alert'

const PlanetDescription = () => {
    const { planetID } = useParams()
    const [ loader, setLoader ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ planetDescription, setPlanetDescription ] = useState({})
    const { name, rotation_period, diameter, climate, gravity, terrain, population, residents } = planetDescription

    const getPlanetDescription = async planetID => {
        setLoader(true)
        const { data } = await StarWarsAxios.get(`planets/${planetID}/`)

        setPlanetDescription(data)
        setLoader(false)
    }

    useEffect(() => {
        getPlanetDescription(planetID)
            .catch(() => setError('Wrong fetching!'))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [planetID])

    return (
        <>
            {loader
                ? <Loader />
                : <div className="bg-dark rounded text-white mt-5 ml-3 mr-3 p-3 cursor-default">
                    <div className="d-flex flex-column">
                        <h5 className="text-warning text-center">{name?.toUpperCase()}</h5>
                        <p className="whiteSpace-pre-line">Rotation period: {rotation_period}</p>
                        <p className="whiteSpace-pre-line">Diameter: {addSpacesToNumber(diameter)}</p>
                        <p className="whiteSpace-pre-line">Climate: {climate}</p>
                        <p className="whiteSpace-pre-line">Gravity: {gravity}</p>
                        <p className="whiteSpace-pre-line">Terrain: {terrain}</p>
                        <p className="whiteSpace-pre-line">Population: {addSpacesToNumber(population)}</p>
                        <AdditionalList fetchInfo={residents} title="Show residents" />
                    </div>
                </div>
            }

            <Alert message={error} setError={setError} />
        </>
    )
}

export default PlanetDescription
