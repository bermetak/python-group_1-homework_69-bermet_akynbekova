import React, {Component} from "react";
import {connect} from "react-redux";
import './Display.css';


class Display extends Component {
    render() {
        const {input, result} = this.props;
        return (
            <div className="Display border border-primary ">
                <h1>{input}</h1>
                <h3>{result === null ? '' : result} </h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        input: state.input,
        result: state.result
    }
};


export default connect(mapStateToProps)(Display);