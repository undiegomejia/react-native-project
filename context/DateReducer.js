import {CHANGE_DATE, RESET_DATE} from './DateActions'

export const DateReducer =(state, action)=>{
    switch(action.type){
        case CHANGE_DATE:
            return{
                ...state, 
                appDay: new Date(action.payload)
              }
        case RESET_DATE:
            return{
                ...state,
                appDay: null
            }
          default:
              return state
      }
}