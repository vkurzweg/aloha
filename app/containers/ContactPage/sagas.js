import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import moment from 'moment';
import { toJS } from 'immutable';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import firebase from 'firebase';
import { db } from 'utils/firebase-config';
import { createMessageSuccess, createMessageFailure, openModal } from './actions';
import { selectContact, selectForm } from './selectors';
import axios from 'axios';


export function* createMessageAsync() {
  try {
    console.log('Attempting to create message');
    const formState = yield select(selectForm);
    const contact = formState.get('contact').toJS();
    const message = contact.values;
    const api = axios.create({
      baseURL: 'http://localhost:3000',
      headers: { 'Access-Control-Allow-Origin': '*' },
      timeout: 3000,
    });
    const response = yield call(api, '/contactus', { method: 'post', data: message })
    yield put(openModal());
    yield put(createMessageSuccess());
    console.log('message sent!')
  } catch (e) {
    console.log('Create message request failed', e);
    yield put(createMessageFailure());
  }
}


// watcher sagas
export function* watchCreateMessage() {
  console.log('redux-saga is running action app/contact/CREATE_MESSAGE listener...');
  yield takeEvery('app/contact/CREATE_MESSAGE', createMessageAsync)
}

export function* rootSaga() {
  const createMessagesWatcher = yield fork(watchCreateMessage);
  yield take(LOCATION_CHANGE);
  yield cancel(createMessagesWatcher);
  console.log('canceled Messages page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];

// SAVE TO FIREBASE
// const date = moment().format('MM-DD-YYYY');
// const newMessage = yield new Promise((resolve, reject) => {
//   const messageRef = db.ref(`messages/${date}`).push(message, (err) => {
//     db.ref(`messages/${date}/${messageRef.key}`).set(message, (err) => {
//       resolve(message)
//     })
//   })
// });
