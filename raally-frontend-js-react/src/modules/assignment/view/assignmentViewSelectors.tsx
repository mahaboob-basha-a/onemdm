import { createSelector } from 'reselect';

const selectRaw = (state) => state.assignment.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assignmentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default assignmentViewSelectors;
