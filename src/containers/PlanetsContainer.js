import React, { useEffect, useState, useMemo } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import StarWarsAxios from '../axios/StarWarsAxios'
import Loader from '../components/Loader'
import Arrow from '../components/Arrow'
import LeftArrow from '../images/left-arrow.svg'
import RightArrow from '../images/right-arrow.svg'
import Planet from '../components/Planet'
import { getDigitsFromString } from '../utils/utils'

const PlanetsContainer = () => {
    const { planetsPage } = useParams()
    const history = useHistory()
    const currentPage = useMemo(() => planetsPage, [planetsPage])
    const [ loader, setLoader ] = useState(false)
    const [ nextPage, setNextPage ] = useState(null)
    const [ previousPage, setPreviousPage ] = useState(null)
    const [ planets, setPlanets ] = useState([])

    const getPlanets = async toPage => {
        setLoader(true)
        const { data: { next, previous, results } } = await StarWarsAxios.get(`planets/?page=${toPage}`)

        setPlanets(results)
        setPreviousPage(getDigitsFromString(previous))
        setNextPage(getDigitsFromString(next))
        setLoader(false)
    }

    useEffect(() => {
        getPlanets(currentPage)
            .catch(() => history.push('1'))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <>
            <h4 className="cursor-default text-center mt-5">PLANETS</h4>
            <div className="d-flex justify-content-center align-items-center min-height-400">
                <Arrow src={LeftArrow} onClick={() => history.push(previousPage)} disabled={!previousPage} />
                <div className="row pr-1 pl-35 w-100">
                    {loader
                        ? <Loader />
                        : planets.map(planet => (
                            <Planet key={planet.name} planet={planet} planetID={getDigitsFromString(planet.url)} />
                        ))
                    }
                </div>
                <Arrow src={RightArrow} onClick={() => history.push(nextPage)} disabled={!nextPage} />
            </div>
            <h4 className="text-center font-weight-bold">{currentPage}</h4>
        </>
    )
}

export default PlanetsContainer
