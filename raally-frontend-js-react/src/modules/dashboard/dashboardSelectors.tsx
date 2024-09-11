import { createSelector } from 'reselect';

const selectRaw = (state) => state.dashboard;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectData = createSelector(
  [selectRaw],
  (raw) => raw.data,
);

const selectCurrentUsageDataByHours = createSelector(
  [selectData],
  (data) => data.currentUsageDataByHours,
)

const selectCurrentUsageDataByPeople = createSelector(
  [selectData],
  (data) => data.currentUsageDataByPeople
)

const selectCurrentIdlePeopleByRole = createSelector(
  [selectData],
  (data) => data.currentIdlePeopleByRole,
)

const selectNumberOfPeople = createSelector(
  [selectData],
  (data) => data.numberOfPeople,
)

const selectElapsedTime = createSelector(
  [selectData],
  (data) => data.totalElapsedTime,
)

const dashboardSelector = {
  selectLoading,
  selectData,
  selectCurrentUsageDataByHours,
  selectCurrentUsageDataByPeople,
  selectCurrentIdlePeopleByRole,
  selectNumberOfPeople,
  selectElapsedTime,
  selectRaw,
};

export default dashboardSelector;
