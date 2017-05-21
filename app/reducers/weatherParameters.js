const weatherParameters = (state={title:'gggg'}, action) => {
    switch(action.type){
        case 'ADD_WEATHERDETAILS' :

           // state = Object.assign(state,{title:action.title,unit:action.unit,showWind:action.showWind})
            state = Object.assign({},state,{title:action.title})
            return state

        default:
            return state
    }
}

export default weatherParameters