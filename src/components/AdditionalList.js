import React, { useState } from 'react'
import Loader from './Loader'
import RotatedArrow from './RotatedArrow/RotatedArrow'

const AdditionalList = ({ items, title, loading, onClick }) => {
    const [ show, setShow ] = useState(false)

    const onClickHandler = () => {
        setShow(state => !state)
        onClick()
    }

    return (
        <>
            <div
                className="d-flex align-baseline text-info cursor-pointer fit-content underline-hover mb-2"
                onClick={onClickHandler}
            >
                {title}
                <RotatedArrow rotate={show ? 180 : 0}/>
                {loading && <div className="mt-m56"> <Loader /> </div>}
            </div>
            {items && show && items.map(item => (
                <div className="font-italic text-secondary" key={item}>{item}</div>
            ))}
            {items && show && !items.length && <div className="font-italic text-danger">NO RESIDENTS</div>}
        </>
    )
}

export default AdditionalList
