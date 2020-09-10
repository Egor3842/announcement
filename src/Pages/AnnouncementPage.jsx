import React, { useState} from 'react'
import s from '../assests/styles/AnnouncementPage.module.css'
import Header from '../elements/Header'
import { connect } from 'react-redux'
import Announcement from '../elements/Announcement'
import AddAnnounce from '../elements/Form'
import {SetNewAnnounce,DeleteAnnounce,ShowCurrentAnnounce,SetCurrentPage} from '../redux/Reducers/actionCreactors'
import Notification from '../core/Notification'
import Pagination from '../elements/Pagination'

const AnnouncementPage = (props) => {
    const [isAddButtonClick,setButtonClick] = useState(false)
    const AllAnnouncements = props.currentAnnounce.map((x,key)=><Announcement 
                                                        currentAmountAnnouncePage = {props.currentAnnounce.length}
                                                        ShowCurrentAnnounce = {props.ShowCurrentAnnounce}
                                                        DeleteAnnounce = {props.DeleteAnnounce}
                                                        SetCurrentPage = {props.SetCurrentPage}
                                                        id = {key} title = {x.title}
                                                        currentPage ={props.currentPage}
                                                        textAnnouns = {x.textAnnouns}
                                                        numberPhone = {x.numberPhone}
                                                        city = {x.city}/>)

    return (
        <div className = {s.container}>
             <div className = {s.container_Header}>
             <Header   Amount = {props.announcements.length} 
              setButtonClick = {setButtonClick}/>
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
                      ShowCurrentAnnounce = {props.ShowCurrentAnnounce}
                      SetNewAnnounce = {props.SetNewAnnounce}/>
                 </div>:
                 ''
             }
             <div className = {s.container_Pagination}>
             <Pagination currentPage = {props.currentPage}
             Amount = {props.announcements.length}
             AnnouncmentsPageAmount = {props.AnnouncmentsPageAmount}
             ShowCurrentAnnounce = {props.ShowCurrentAnnounce}
             SetCurrentPage = {props.SetCurrentPage} />
             </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    announcements:state.AnnouncementReducer.announcements,
    currentAnnounce:state.AnnouncementReducer.currentAnnounce,
    currentPage: state.AnnouncementReducer.currentPage,
    AnnouncmentsPageAmount:state.AnnouncementReducer.AnnouncmentsPageAmount
})

export default connect (mapStateToProps,{SetNewAnnounce,DeleteAnnounce,
    ShowCurrentAnnounce,SetCurrentPage}) (AnnouncementPage)