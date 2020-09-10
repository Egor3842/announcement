import React from 'react'
import Title from '../core/Title'
import Button from '../core/Button'
import s from '../assests/styles/Header.module.css'

const Header = (props) => {
    return ( 
            <table className = {s.table}>
            <tbody>
                <tr>
                    <td> <Title title = 'Всего объявлений:' Amount = {props.Amount}/></td>
                    <td> <Button onClickFunc = {props.setButtonClick} buttonName = 'Добавить'/></td>
                </tr>
                </tbody>
            </table>
           
    )
}
export default Header