import { ADD_NEW_ANNOUNCE, DELETE_ANNOUNCE } from "./constants"

let initialState={
    announcements:[
        {
            title:'adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd',
            textAnnouns:'adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd adsdawqwd',
            numberPhone:'+71111111111',
            city:'Москва'
        }
    ]
}

const AnnouncementReducer=(state=initialState,action)=>{
    switch(action.type){
      case ADD_NEW_ANNOUNCE:{
          return {...state,announcements:[action.payload,...state.announcements]}
      }
      case DELETE_ANNOUNCE:{
          let array = state.announcements;
            array.splice(action.id,1)
        return {...state,announcements:[...array]}
      }
        default:
            return state
        }
    }
export default AnnouncementReducer


export const SetNewAnnounce=(title,textAnnouns,numberPhone,city)=>{
        return({type:ADD_NEW_ANNOUNCE, payload:{title,textAnnouns,numberPhone,city}});
    }

export const DeleteAnnounce = (id) => {
    return ({type:DELETE_ANNOUNCE,id})
}
     
   