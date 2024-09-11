import { createSelector } from 'reselect';

const selectRaw = (state) => state.compensation.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const compensationDestroySelectors = {
  selectLoading,
};

export default compensationDestroySelectors;
