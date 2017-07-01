import { createSelector } from 'reselect';

/**
 * Direct selector to the contactPage state domain
 */
const selectCareers = (state) => state.get('careers');
const selectApplication = (state) => state.get('form');

/**
 * Other specific selectors
 */

export {
  selectCareers,
  selectApplication,
};
