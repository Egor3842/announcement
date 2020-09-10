import React from 'react'
import s from '../assests/styles/Core.module.css'

const Button = (props) => {
    return (
    <button onClick = {()=>props.onClickFunc(true)} className = {s.button}>{props.buttonName}</button>
    )
}

export default Button