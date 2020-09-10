import React  from 'react'
import s from '../assests/styles/TextArea.module.css'

export const TextArea = ({input, meta,...props}) => {
    const hasError  = meta.touched && meta.error
    return(
        <div className={s.form + " " +(hasError ? s.error : "")}>       
             <div>
            <textarea {...props} {...input}/>
        </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Select = ({input, meta,...props}) => {
    return(
        <div className={s.form}>       
             <div>
            <select {...props} {...input}/>
        </div>
        </div>

    )
}

export const Input = ({input, meta,...props}) => {
    const hasError  = meta.touched && meta.error
    return(
        <div className={s.form + " " +(hasError ? s.error : "")}>       
             <div>
            <input {...props} {...input}/>
        </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}
