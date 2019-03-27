import React, {Component, Fragment} from "react";

import {connect} from "react-redux";


class Button extends Component {
    render() {
        return (

            <Fragment>
                <div className='ml-auto mr-auto'>
                <div className=' d-flex flex-wrap p-3'>
                {this.props.buttons.map( (value) =>
                 <button onClick={() => this.props.addToInput(value)}>{value}</button>
                )}
                    <br/>


                    </div>
                <button className='btn btn-danger' onClick={this.props.removeFromInput}>
                    {'<'}
                </button>
                <button className='btn btn-success' onClick={this.props.calculateInput}>
                    {'='}
                </button>
</div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        buttons: state.buttons
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToInput: (value) => dispatch({type: 'ADD_INPUT', value}),
        removeFromInput: () => dispatch({type: 'REMOVE_INPUT'}),
        calculateInput: () => dispatch({type: 'CALCULATE'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);