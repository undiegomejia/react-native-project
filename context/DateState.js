import React, {useReducer} from 'react'

import {DateContext} from './DateContext'
import {DateReducer} from './DateReducer'

import {CHANGE_DATE, RESET_DATE} from './DateActions'

export const DateState = ({ children }) => {
    const initialState={
        appDay: null
    }

    const [state, dispatch] = useReducer(DateReducer, initialState)

    const setAppDate= (date)=>{
        dispatch({
            type: CHANGE_DATE,
            payload: date
        })
    }

    const resetAppDate= ()=>{
        dispatch({
            type: RESET_DATE
        })
    }

    
    return <DateContext.Provider value={{
        appDay: state.appDay,
        setAppDate,
        resetAppDate,
    }}>{children}</DateContext.Provider>;
  };