import React, { useMemo } from 'react'

import styles from './ArrowStyles.module.scss'

const Arrow = ({ onClick, disabled, src, ...rest }) => {
    const classes = useMemo(() => {
        const baseStyles = ['w-85px text-danger cursor-pointer align-self-center p-3 text-center', styles.arrow]

        if (disabled) {
            baseStyles.push(styles.disabled)
        }

        return baseStyles.join(' ')
    }, [disabled])

    return (
        <img className={classes}
             src={src} alt="Arrow"
             onClick={disabled ? () => {} : onClick}
             { ...rest }
        />
    )
}

export default Arrow
