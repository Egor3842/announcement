import React from 'react'
import s from '../assests/styles/Pagination.module.css'

const Pagination = (props)=> {

    let Pages= [];
    let PagesCount = Math.ceil(props.Amount/props.AnnouncmentsPageAmount)
    for (let i = 1;i <= PagesCount; i++){
        Pages.push(i)
    }
    const ShowClickedPageAnnounce = (page) => {
        props.SetCurrentPage(page)
        props.ShowCurrentAnnounce()
    }
    return (
        <div className = {s.container}>
            {Pages.map((x)=>
            <div onClick = {()=> {ShowClickedPageAnnounce(x)}} className = {s.container_Page + ' ' + (props.currentPage === x && s.selectedPage_container)}>
            <div className = {props.currentPage === x && s.selectedPage}>{x}</div>
            </div>
            )}
        </div>
    )
}
export default Pagination