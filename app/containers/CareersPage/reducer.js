/*
 *
 * CareersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_APPLICATION,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAILURE,
  OPEN_CAREER_MODAL,
  CLOSE_CAREER_MODAL,
} from './constants';

const careersPageInitialState = fromJS({
  isCreatingApplication: false,
  modalIsOpen: false,
});

function careersPageReducer(state = careersPageInitialState, action) {
  switch (action.type) {
    case CREATE_APPLICATION:
      return state.set('isCreatingApplication', fromJS(action.payload));
    case CREATE_APPLICATION_SUCCESS:
      return state.set('isCreatingApplication', fromJS(action.payload));
    case CREATE_APPLICATION_FAILURE:
      return state.set('isCreatingApplication', fromJS(action.payload))
    case OPEN_CAREER_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    case CLOSE_CAREER_MODAL:
      return state.set('modalIsOpen', fromJS(action.payload));
    default:
      return state;
  }
}

export default careersPageReducer;
