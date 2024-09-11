import { createSelector } from 'reselect';

const selectRaw = (state) => state.compensation.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const compensationViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default compensationViewSelectors;
