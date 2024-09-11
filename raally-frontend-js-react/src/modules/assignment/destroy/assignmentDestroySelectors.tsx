import { createSelector } from 'reselect';

const selectRaw = (state) => state.assignment.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const assignmentDestroySelectors = {
  selectLoading,
};

export default assignmentDestroySelectors;
