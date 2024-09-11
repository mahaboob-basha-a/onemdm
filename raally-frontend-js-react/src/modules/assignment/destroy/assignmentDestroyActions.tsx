import listActions from 'src/modules/assignment/list/assignmentListActions';
import AssignmentService from 'src/modules/assignment/assignmentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSIGNMENT_DESTROY';

const assignmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentDestroyActions.DESTROY_STARTED,
      });

      await AssignmentService.destroyAll([id]);

      dispatch({
        type: assignmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.assignment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/assignment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assignmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: assignmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssignmentService.destroyAll(ids);

      dispatch({
        type: assignmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.assignment.destroyAll.success'),
      );

      getHistory().push('/assignment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assignmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default assignmentDestroyActions;
