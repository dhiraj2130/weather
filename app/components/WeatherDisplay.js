
import React from 'react'

let WeatherDisplay = (props) => {
    "use strict";
    // let input;

    return(
        <div >
            <h2>hello</h2>

            {props.title}

            {props.temp}

            {props.name}

        </div>
    )

}
export default WeatherDisplay