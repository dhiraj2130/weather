const weatherDisplay = (state={temp:'',name:'',windspeed:'',winddegree:''}, action) => {
    switch(action.type){
        case 'ADD_WEATHERDISPLAYDETAILS' :

           // state = Object.assign(state,{title:action.title,unit:action.unit,showWind:action.showWind})

           // state = Object.assign({},state,{temp:action.temp, name:action.name, windspeed:action.windspeed, winddegree:action.winddegree})
          return Object.assign({},state,{temp:action.temp, name:action.name, windspeed:action.windspeed, winddegree:action.winddegree})
            //return state

        default:
            return state
    }
}

export default weatherDisplay