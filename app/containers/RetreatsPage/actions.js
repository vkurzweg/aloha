import {
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
} from './constants';


export function openModal() {
  console.log('action dispatched')
  return {
    type: OPEN_SIGNUP_MODAL,
    payload: true,
  };
}

export function closeModal() {
  return {
    type: CLOSE_SIGNUP_MODAL,
    payload: false,
  };
}
