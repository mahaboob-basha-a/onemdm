import { createSelector } from 'reselect';

const selectRaw = (state) => state.jobTitle.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const jobTitleViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default jobTitleViewSelectors;
