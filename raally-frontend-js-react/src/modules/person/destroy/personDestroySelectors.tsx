import { createSelector } from 'reselect';

const selectRaw = (state) => state.person.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const personDestroySelectors = {
  selectLoading,
};

export default personDestroySelectors;
