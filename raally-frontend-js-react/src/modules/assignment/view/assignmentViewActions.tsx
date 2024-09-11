import AssignmentService from 'src/modules/assignment/assignmentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSIGNMENT_VIEW';

const assignmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentViewActions.FIND_STARTED,
      });

      const record = await AssignmentService.find(id);

      dispatch({
        type: assignmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assignmentViewActions.FIND_ERROR,
      });

      getHistory().push('/assignment');
    }
  },
};

export default assignmentViewActions;
