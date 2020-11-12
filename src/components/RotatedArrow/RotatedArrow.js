import React from 'react'
import DownArrow from '../../images/down-arrow.svg'

import styles from './RotatedArrowStyles.module.scss'

const RotatedArrow = ({ rotate }) => {
    return (
        <img
            className={styles.rotatedArrow}
            style={{ transform: `rotate(${rotate}deg)` }}
            src={DownArrow}
            alt={DownArrow}
        />
    )
}

export default RotatedArrow