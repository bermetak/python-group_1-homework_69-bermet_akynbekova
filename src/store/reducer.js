const initialState = {
    input: '',
    buttons: [
        '+', 1, 2, 3, '-', 4, 5, 6, '*', 7, 8, 9, '/', 0
    ],
    result: null
};

const getResult = (state) => {
    let res = eval(state.input);
    return {...state, result: res}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INPUT':
            return {...state, input: state.input + action.value};
        case 'REMOVE_INPUT':
            return {...state, input: state.input.slice(0, -1)};
        case 'CALCULATE':
            return getResult(state);

        default:
            return state;
    }
};

export default reducer;