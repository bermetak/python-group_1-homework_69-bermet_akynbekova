import React, {Component} from "react";
import {connect} from "react-redux";


class Display extends Component {
    render() {
        const {input, result} = this.props;
        return (
            <div className="Display border border-primary ">
                <h1>{input}</h1>
                <h1>{result === null ? '' : result} </h1>
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