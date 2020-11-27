import React from 'react'
import Store from './context'

const __STORE__ = {};
const __PREV_STATE__ = {}
let isFirst = true

let initialState = {};
const  reducer1 = (state, action) => {
    const initialState = {count: 1}
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return initialState
    }

}
const  reducer2 = (state, action) => {
    const initialState = {valodik: 'balam'}
    switch (action.type) {
        case 'valodik':
            return {valodik:action.value};

        default:
            return initialState
    }
}


const rootReducer = {
    reducer1,
    reducer2
}

function reducer(state, action) {
    let innerState = {}
    Object.keys(rootReducer).forEach(item => {
        innerState = Object.assign(innerState,rootReducer[item](state, action))

    })
   if(isFirst){
       initialState = innerState
       __PREV_STATE__.state = innerState
       isFirst = false
   }
    return {...__STORE__.state,...innerState}
}
export const getState = () => __STORE__.state

export const setState = (params) => __STORE__.dispatch(params)

export const handleStateChange = (cb) => {
    const handler = requestAnimationFrame(() => handleStateChange(cb))
    if(JSON.stringify(__STORE__.state) !== JSON.stringify(__PREV_STATE__.state)){
        if (typeof cb === "function") cb(__STORE__.state)
        __PREV_STATE__.state = __STORE__.state

    }
}

const Reducer = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    __STORE__.state = state
    __STORE__.dispatch = dispatch
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}
reducer({}, {})

export default  Reducer
