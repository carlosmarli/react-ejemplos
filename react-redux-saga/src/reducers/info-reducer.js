const initialState = {
    lastTimestamp: 'naaada',
    isLoading: false
};

const infoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TIMESTAMP_FETCH_SUCCEEDED':
            return {
                ...state,
                lastTimestamp: action.lastTimestamp,
                isLoading: false
            };
        case 'TIMESTAMP_FETCH_REQUESTED':
            return {
                ...state,
                isLoading: true
            };
        default:
            return state
    }

};

export {infoReducer};

