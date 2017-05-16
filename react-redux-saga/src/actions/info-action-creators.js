const receiveTimestampActionCreator = (lastTimestamp) => {
    console.log('receiveTimestampActionCreator');
    return {
        type: 'TIMESTAMP_FETCH_SUCCEEDED',
        lastTimestamp
    }
};

const requestTimestampActionCreator = () => {
    return {
        type: 'TIMESTAMP_FETCH_REQUESTED'
    }
};

export {receiveTimestampActionCreator, requestTimestampActionCreator}

