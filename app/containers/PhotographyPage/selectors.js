import { createSelector } from 'reselect';

/**
 * Direct selector to the galleryPage state domain
 */
const selectPhotographyPageDomain = () => (state) => state.get('galleryPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GalleryPage
 */

const makeSelectPhotographyPage = () => createSelector(
  selectPhotographyPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectPhotographyPage;
export {
  selectPhotographyPageDomain,
};
