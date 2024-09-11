import DashboardService from 'src/modules/dashboard/dashboardService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DASHBOARD';

const dashboardActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  loadDashboardData: () => async (dispatch) => {
    try {
      dispatch({
        type: dashboardActions.FIND_STARTED,
      });

      const record = await DashboardService.fetchDashboardData();
      
      dispatch({
        type: dashboardActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dashboardActions.FIND_ERROR,
      });

      getHistory().push('/dashboard');
    }
  },
};

export default dashboardActions;
