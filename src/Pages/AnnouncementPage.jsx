import React, { useState } from 'react'
import s from '../assests/styles/AnnouncementPage.module.css'
import Header from '../elements/Header'
import { connect } from 'react-redux'
import Announcement from '../elements/Announcement'
import AddAnnounce from '../elements/Form'
import {SetNewAnnounce,DeleteAnnounce} from '../redux/Reducers/AnnouncementReducer'
import Notification from '../core/Notification'

const AnnouncementPage = (props) => {
    const [isAddButtonClick,setButtonClick] = useState(false)
    const AllAnnouncements = props.announcements.map((x,key)=><Announcement 
                                                        DeleteAnnounce = {props.DeleteAnnounce}
                                                        id = {key} title = {x.title}
                                                        textAnnouns = {x.textAnnouns}
                                                        numberPhone = {x.numberPhone}
                                                        city = {x.city}/>)

    return (
        <div className = {s.container}>
             <div className = {s.container_Header}>
             <Header setButtonClick = {setButtonClick}/>
             </div>
             {props.announcements.length ? 
             <div className = {s.container_Announcements}>
             {AllAnnouncements}
            </div>:
            <Notification notify = 'Объявлений нет'/>
             }
             
             {
                 isAddButtonClick ? 
                 <div className = {s.container_Form}>
                     <AddAnnounce setButtonClick = {setButtonClick}
                      SetNewAnnounce = {props.SetNewAnnounce}/>
                 </div>:
                 ''
             }
               
        </div>
    )
}
const mapStateToProps = (state) => ({
    announcements:state.AnnouncementReducer.announcements
})

export default connect (mapStateToProps,{SetNewAnnounce,DeleteAnnounce}) (AnnouncementPage)