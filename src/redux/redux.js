import {createStore, combineReducers}  from 'redux'

import {reducer as formReducer} from 'redux-form'
import AnnouncementReducer from './Reducers/AnnouncementReducer';



let reducers=combineReducers({
    form:formReducer,
    AnnouncementReducer:AnnouncementReducer
})
let store=createStore(reducers);

export default store;