import React from 'react'
import s from '../assests/styles/Announcement.module.css'

const Announcement = (props) => {
    return (
        <div className = {s.container} >
            <div className = {s.Announs_Title}> <span onClick = {()=>{props.DeleteAnnounce(props.id)}} className={s.close}></span>
                {props.title}</div>
            <div className = {s.Announs_Text}>{props.textAnnouns ? props.textAnnouns : 'Описания нет'}</div>
            <table className = {s.Announs_Contact}>
                <tbody>
                    <tr>
                        <td>Номер:</td>
                        <td className = {s.Contact}>{props.numberPhone}</td>
                        <td>Город:</td>
                        <td className = {s.Contact}>{props.city !== 'Не выбран' ? props.city : <div style = {{fontWeight:'bold'}}>Не указан</div>}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Announcement