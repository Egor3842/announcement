import {createStore, combineReducers}  from 'redux'

import {reducer as formReducer} from 'redux-form'
import AnnouncementReducer from './Reducers/AnnouncementReducer';



let reducers=combineReducers({
    form:formReducer,
    AnnouncementReducer:AnnouncementReducer
})

const saveState = (state) => {
    try {

        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};
const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();

let store=createStore(reducers,oldState);

export default store;
store.subscribe(() => {
    saveState(store.getState());
});