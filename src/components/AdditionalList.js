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
                className="text-info cursor-pointer fit-content underline-hover mb-2"
                onClick={onClickHandler}
            >
                {title}
                <RotatedArrow rotate={show ? 180 : 0}/>
            </div>
            {loading
                ? <div className="w-10"> <Loader /> </div>
                : items && show && items.map(item => (
                    <div key={item}>{item}</div>
                ))
            }
        </>
    )
}

export default AdditionalList
