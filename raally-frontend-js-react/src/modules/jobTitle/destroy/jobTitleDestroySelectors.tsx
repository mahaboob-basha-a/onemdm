import { createSelector } from 'reselect';

const selectRaw = (state) => state.jobTitle.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const jobTitleDestroySelectors = {
  selectLoading,
};

export default jobTitleDestroySelectors;
