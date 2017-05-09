/*
 *
 * ContactPage actions
 *
 */

import {
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  SET_NAME,
  SET_EMAIL,
  SET_NUMBER,
  SET_BODY,
} from './constants';

export function setName(name) {
  return {
    type: SET_NAME,
    name,
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email,
  };
}

export function setNumber(number) {
  return {
    type: SET_NUMBER,
    number,
  };
}

export function setBody(body) {
  return {
    type: SET_BODY,
    body,
  };
}

export function createMessage() {
  return {
    type: CREATE_MESSAGE,
    payload: true,
  };
}

export function createMessageSuccess() {
  return {
    type: CREATE_MESSAGE_SUCCESS,
    payload: false,
  };
}

export function createMessageFailure() {
  return {
    type: CREATE_MESSAGE_FAILURE,
    payload: false,
    isCreateFailed: true,
  };
}
