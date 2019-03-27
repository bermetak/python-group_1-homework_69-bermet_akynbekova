import React, {Component} from "react";
import './Calculator.css';
import {connect} from "react-redux";
import Display from '../../components/Display/Display';
import Button from "../../components/Button/Button";


class Calculator extends Component {
    render() {

        return (
            <div className="Calculator border border-primary ">

                <Display />
                <Button />


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch({type: 'INCREMENT'}),
        decreaseCounter: () => dispatch({type: 'DECREMENT'}),
        addCounter: (amount) => dispatch({type: 'ADD_COUNTER', amount}),
        subCounter: (amount) => dispatch({type: 'SUB_COUNTER', amount})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);