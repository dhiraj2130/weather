
import React from 'react'

require('../scss/responsive.scss');

let WeatherEditorForm = (props) => {
    "use strict";
    let input;

    var myStyle ={
        border:"solid black 1px",
        width: "400px",
        background:"#f4f5f7"
    }
    var label ={
        margin: "8px",
        display: "block"

    }

    return(
        <div style={myStyle}>
            
            <form className="form" onSubmit={e => {
             e.preventDefault()
             if(!input.value.trim()){
             return
             }
             props.onSubmit(input.value)
             input.value = ''
             }}>

                <div className="row">
                    <label style={label}> Title</label>
                    <input type="text" className="form-control" ref={node => {input=node}} />

                </div>
                <div className="row">
                    <label style={label}> Unit</label>
                    <input type="radio" name="cc" value = {'C'} >Celcious</input>
                    <input type="radio" name="unit" value ={'F'}>Farenheit</input>
                </div>
                <div className="row">
                     <div className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                            Change Details
                        </button>
                     </div>
                </div>
            </form>
        </div>
    )

}
export default WeatherEditorForm