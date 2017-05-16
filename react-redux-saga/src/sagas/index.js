import {takeEvery, call, put} from 'redux-saga/effects';
import {receiveTimestampActionCreator} from '../actions/info-action-creators';

function* fetchTimestamp() {
    yield console.log('se activo fetchTimestamp');
    const timestamp = yield call(loadApi);
    yield put(receiveTimestampActionCreator(timestamp));
}

function* mySaga() {
    yield takeEvery('TIMESTAMP_FETCH_REQUESTED', fetchTimestamp);
}

function loadApi() {
    //Aquí estoy simulando que estoy llamando a una API, por eso hago un tiempo de 3 segundos antes de devolver el timestamp
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Date().getTime());
        }, 3000);
    });
}

export default mySaga;