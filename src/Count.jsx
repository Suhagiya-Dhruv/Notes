import React from 'react'
import { useSelector } from 'react-redux'

const Count = () => {

    const { name } = useSelector(state => state.counter)

    return (
        <div>{name}</div>
    )
}

export default Count