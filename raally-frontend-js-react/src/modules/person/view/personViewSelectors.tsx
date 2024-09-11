import { createSelector } from 'reselect';

const selectRaw = (state) => state.person.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const personViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default personViewSelectors;
