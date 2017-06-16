import { createSelector } from 'reselect';

/**
 * Direct selector to the contactPage state domain
 */
const selectRetreats = (state) => state.get('retreats');

/**
 * Other specific selectors
 */

export {
  selectRetreats,
};
