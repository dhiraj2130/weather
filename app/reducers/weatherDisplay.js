const weatherDisplay = (state={temp:'455'}, action) => {
    switch(action.type){
        case 'ADD_WEATHERDISPLAYDETAILS' :

           // state = Object.assign(state,{title:action.title,unit:action.unit,showWind:action.showWind})

            state = Object.assign({},state,{temp:action.temp})
            console.log("hello1"+state.temp);
            return state

        default:
            return state
    }
}

export default weatherDisplay