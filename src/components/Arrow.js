import React, { useMemo } from 'react'

const Arrow = ({ onClick, disabled, src, ...rest }) => {
    const classes = useMemo(() => {
        let base = 'arrow w-85px text-danger cursor-pointer align-self-center p-3 text-center'

        if (disabled) {
            base += ' disabled'
        }

        return base
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