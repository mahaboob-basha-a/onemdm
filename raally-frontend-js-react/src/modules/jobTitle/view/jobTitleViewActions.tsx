import JobTitleService from 'src/modules/jobTitle/jobTitleService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'JOBTITLE_VIEW';

const jobTitleViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: jobTitleViewActions.FIND_STARTED,
      });

      const record = await JobTitleService.find(id);

      dispatch({
        type: jobTitleViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: jobTitleViewActions.FIND_ERROR,
      });

      getHistory().push('/job-title');
    }
  },
};

export default jobTitleViewActions;
