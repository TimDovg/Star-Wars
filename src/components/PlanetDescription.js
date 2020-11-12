import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StarWarsAxios from '../axios/StarWarsAxios'
import Loader from './Loader'
import { addSpacesToNumber, promisifyURLS } from '../utils/utils'
import AdditionalList from './AdditionalList'
import Alert from './Alert/Alert'

const PlanetDescription = () => {
    const { planetID } = useParams()
    const [ loader, setLoader ] = useState(false)
    const [ residentsLoader, setResidentsLoader ] = useState(false)
    const [ error, setError ] = useState(null)
    const [ residentsData, setResidentsData ] = useState(null)
    const [ planetDescription, setPlanetDescription ] = useState({})
    const { name, rotation_period, diameter, climate, gravity, terrain, population, residents } = planetDescription

    const getPlanetDescription = async planetID => {
        setLoader(true)
        const { data } = await StarWarsAxios.get(`planets/${planetID}/`)

        setPlanetDescription(data)
        setLoader(false)
    }

    const prepareResidentsData = fetchedData => {
        const residentsDataConfig = fetchedData.map(({ data: { name, gender } }) => `${name} (${gender})`)

        setResidentsData(residentsDataConfig)
    }

    const fetchResidents = async () => {
        if (!residentsData) {
            setResidentsLoader(true)

            try {
                const data = await Promise.all(promisifyURLS(residents))

                prepareResidentsData(data)
            } catch {
                setError('Wrong fetching! Redirecting...')
            }

            setResidentsLoader(false)
        }
    }

    useEffect(() => {
        getPlanetDescription(planetID)
            .catch(() => setError('Wrong fetching! Redirecting...'))

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
                        <AdditionalList
                            items={residentsData}
                            title="Show residents"
                            loading={residentsLoader}
                            onClick={fetchResidents}
                        />
                    </div>
                </div>
            }

            <Alert message={error} setError={setError} />
        </>
    )
}

export default PlanetDescription
