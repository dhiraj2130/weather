
import React from 'react'

require('../scss/responsive.scss');

class WeatherEditorForm extends React.Component {
    constructor(props) {
        super(props);
        this.myStyle ={
            border:"solid black 1px",
            width: "400px",
            background:"#f4f5f7"
        }
        this.label ={
            margin: "8px",
            display: "block"

        }
        this.radio ={
            margin: "10px",
        }
        this.setRef = this.setRef.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

setRef(node){
    this.inputTitle = node;
}
    onTitleChange(){
        this.props.onChangeTitle(this.inputTitle.value);
    }


    render() {
        return (
            <div style={this.myStyle}>

                <form className="form">

                    <div className="row">
                        <label style={this.label}> Title</label>
                        <input type="text" className="form-control" ref={this.setRef}
                               onChange={this.onTitleChange}/>

                    </div>
                    <div className="row">
                        <label style={this.label}> Unit</label>
                        <input type="radio" style={this.radio} value={"C"}

                        >Celsius</input>
                        <input type="radio" style={this.radio}>Fahrenheit</input>
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
}
export default WeatherEditorForm