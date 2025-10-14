import React, {Component} from "react";

class Middle extends Component {
    render(){
        return (
            <h1>Welcome, {this.props.name}</h1>
        );
    }
}

export default Middle;

// here we need to use
// extends Component, render(), this.props.name

