import { ADD_NEW_ANNOUNCE, DELETE_ANNOUNCE, SHOW_CURRENRT_ANNOUNCE, SET_CURRENT_PAGE } from "./constants";

export const SetNewAnnounce=(title,textAnnouns,numberPhone,city)=>{
    return({type:ADD_NEW_ANNOUNCE, payload:{title,textAnnouns,numberPhone,city}});
}

export const DeleteAnnounce = (id) => {
return ({type:DELETE_ANNOUNCE,id})
}
export const ShowCurrentAnnounce = () => {
return ({type:SHOW_CURRENRT_ANNOUNCE})
}
export const SetCurrentPage = (currentPage) => {
return ({type:SET_CURRENT_PAGE,currentPage})
}
 