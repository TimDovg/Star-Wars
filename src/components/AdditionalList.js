import React, { useEffect, useState } from 'react'
import Alert from './Alert/Alert'

const AdditionalList = ({ title, fetchInfo = [] }) => {
    const [ error, setError ] = useState(null)

    const fetchAllInfo = async () => {
        // console.log(promisifyURLS(fetchInfo))
    }

    useEffect(() => {
        fetchAllInfo()
            .catch(() => setError('Wrong fetching!'))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="text-info cursor-pointer fit-content underline-hover">
                {title}
            </div>

            <Alert message={error} setError={setError} />
        </>
    )
}

export default AdditionalList
