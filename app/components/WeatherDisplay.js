
import React from 'react'

class WeatherDisplay extends React.Component{

    constructor(props) {
        super(props);
        /* Style values can be read from props to make them real configurable as a component
         */
        this.myStyle ={
            border:"solid black 1px",
            width: "300px",
            background:"#f4f5f7"
        }
        this.label ={
            margin: "8px",
            display: "block"

        }
        this.titleStyle ={
            textAlign:"left",
            margin:"20px",
            fontSize:"20",
            display:"block"
        }
        this.itemStyle ={
            textAlign:"right",
            margin:"20px",
            fontSize:"15",
            display:"block"
        }
        this.nameStyle ={
            textAlign:"right",
            margin:"20px",
            fontSize:"25",
            display:"block"
        }

    }

    render() {
        return (
            <div style={this.myStyle}>
                <div style={this.titleStyle}>{this.props.title}</div>
                <div style={this.nameStyle}> {this.props.name}</div>
                
                <div style={this.itemStyle}>{this.props.temp}  Celsius</div>


                {this.props.temp}


                {this.props.windspeed}

                {this.props.winddegree}

            </div>
        )
    }
}
export default WeatherDisplay