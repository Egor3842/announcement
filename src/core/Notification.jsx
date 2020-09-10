import React from 'react'
import s from '../assests/styles/Core.module.css'

const Notification = (props) => {
    return (
    <h1 className = {s.notification}>{props.notify}</h1>
    )
}
export default Notification