
const initialState = {
    contador: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                contador: state.contador + action.amount
            };
        case 'DECREMENT':
            return {
                ...state,
                contador: state.contador - action.amount
            };
        default:
            return state
    }
}

export {counterReducer};
