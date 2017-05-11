import { take, call, put, select } from 'redux-saga/effects';
import moment from 'moment';
import { toJS } from 'immutable';
import { takeEvery } from 'redux-saga';
import firebase from 'firebase';
import { db } from 'utils/firebase-config';
import { createMessage, createMessageSuccess, createMessageFailure } from './actions';
import { selectContact, selectForm } from './selectors';
import axios from 'axios'


export function* createMessageAsync() {
  try {
    console.log('Attempting to create message');
    const formState = yield select(selectForm);
    const contact = formState.get('contact').toJS();
    const message = contact.values;
    const data = {
      name: message.name,
      email: message.email,
      number: message.cellNumber,
      body: message.message,
    }
    console.log('message', message);
    const api = axios.create({
      baseURL: 'http://localhost:3000'
    })
    const mail = yield call(api, '/contactus', {method: 'post', data})
    const date = moment().format('MM-DD-YYYY');
    const newMessage = yield new Promise((resolve, reject) => {
      db.ref(`messages/${date}`).push(message, (err) => {
        db.ref(`messages/${date}`).set(message, (err) => {
          resolve(message);
        })
      })
    });
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

// All sagas to be loaded
export default [
  watchCreateMessage,
];
