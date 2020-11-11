import React, { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './Alert.module.scss'

const Alert = ({ message, setError }) => {
    const history = useHistory()

    const baseStyles = useMemo(() => {
        const baseStyles = [styles.alert]

        if (message) {
            const timeout = setTimeout(() => {
                setError(null)
                history.push('1')
                clearTimeout(timeout)
            }, 3000)

            baseStyles.push(styles.show)
        }

        return baseStyles.join(' ')

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message])

    return (
        <div className={baseStyles}>
            {message}
        </div>
    )
}

export default Alert
