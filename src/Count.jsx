import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {

    const {value} = useSelector(state => state.counter)

    return (
        <div>{value}</div>
    )
}

export default Count