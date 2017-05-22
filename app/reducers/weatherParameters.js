export const title =(state={title:'Default Title'}, action) => {
    switch(action.type){
        case 'CHANGE_TITLE' :
            return Object.assign({},state,{title:action.title})
        default:
            return state
    }
}

export const unit =(state={unit:'C'}, action) => {
    switch(action.type){
        case 'CHANGE_UNIT' :
            return Object.assign({},state,{unit:action.unit})
        default:
            return state
    }
}

export const wind =(state={wind:'Y'}, action) => {
    switch(action.type){
        case 'CHANGE_WIND' :
            return Object.assign({},state,{wind:action.wind})
        default:
            return state
    }
}
