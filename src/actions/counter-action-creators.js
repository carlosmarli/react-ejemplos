const incrementActionCreator = (amount=1) => {
    return {
        type: 'INCREMENT',
        amount
    }
}

const decrementActionCreator = (amount=1) => {
    return {
        type: 'DECREMENT',
        amount
    }
}

export {incrementActionCreator, decrementActionCreator};