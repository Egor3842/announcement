import React from 'react'
import s from '../assests/styles/Core.module.css'

const Title = (props) => {
    return (
    <div className = {s.title}>{props.title}{props.Amount}</div>
    )
}

export default Title