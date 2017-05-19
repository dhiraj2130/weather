const weatherEditor = (state={title:''}, action) => {
    switch(action.type){
        case 'ADD_WEATHERDETAILS' :
            return
           // state = Object.assign(state,{title:action.title,unit:action.unit,showWind:action.showWind})
            state = Object.assign(state,{title:action.title})
        default:
            return state
    }
}

export default weatherEditor