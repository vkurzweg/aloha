import { take, call, put, select, cancel, fork } from 'redux-saga/effects';
import moment from 'moment';
import { toJS } from 'immutable';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { createApplicationSuccess, createApplicationFailure, openModal } from './actions';
import { selectCareers, selectApplication } from './selectors';
import axios from 'axios';

// Individual exports for testing
export function* createApplicationAsync() {
  try {
    console.log('Attempting to create application');
    const formState = yield select(selectApplication);
    const contact = formState.get('career').toJS();
    const message = contact.values;
    console.log('message', message)
    let base = location.protocol + '//' + location.hostname;
    if (base === 'http://localhost') base = 'http://localhost:3000';
    const api = axios.create({
      baseURL: base,
      headers: { 'Access-Control-Allow-Origin': '*' },
      timeout: 4000,
    });
    const response = yield call(api, '/alohacareers', { method: 'post', data: message });
    console.log('response:', response)
    if (response.status === 200) {
      yield put(openModal());
      yield put(createApplicationSuccess());
    };
    console.log('message sent!');
  } catch (e) {
    console.log('Create message request failed', e);
    yield put(createApplicationFailure());
  }
}

export function* watchCreateApplication() {
  console.log('redux-saga is running action app/careers/CREATE_APPLICATION listener...');
  yield takeEvery('app/careers/CREATE_APPLICATION', createApplicationAsync)
}

export function* rootSaga() {
  const createApplicationWatcher = yield fork(watchCreateApplication);
  yield take(LOCATION_CHANGE);
  yield cancel(createApplicationWatcher);
  console.log('canceled Messages page watchers')
}

// All sagas to be loaded
export default [
  rootSaga,
];
