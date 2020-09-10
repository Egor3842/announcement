import { ADD_NEW_ANNOUNCE, DELETE_ANNOUNCE, SHOW_CURRENRT_ANNOUNCE, SET_CURRENT_PAGE } from "./constants"

let initialState={
    announcements:[],
    currentPage: 1,
    currentAnnounce:[],
    AnnouncmentsPageAmount:3
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
      case SHOW_CURRENRT_ANNOUNCE: {
          let array = []
            for (let i = state.AnnouncmentsPageAmount*(state.currentPage-1);
            i<state.AnnouncmentsPageAmount*(state.currentPage-1)+state.AnnouncmentsPageAmount;
            i++){
                if (state.announcements[i]){
                    array.push(state.announcements[i])
                    console.log(array)
                }
              
            }
            return {...state,   currentAnnounce: [...array] }
      }
      case SET_CURRENT_PAGE: {
          return {...state, currentPage:action.currentPage}
      }
        default:
            return state
        }
    }
export default AnnouncementReducer



   