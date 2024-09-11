import listActions from 'src/modules/compensation/list/compensationListActions';
import CompensationService from 'src/modules/compensation/compensationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'COMPENSATION_DESTROY';

const compensationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: compensationDestroyActions.DESTROY_STARTED,
      });

      await CompensationService.destroyAll([id]);

      dispatch({
        type: compensationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.compensation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/compensation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: compensationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: compensationDestroyActions.DESTROY_ALL_STARTED,
      });

      await CompensationService.destroyAll(ids);

      dispatch({
        type: compensationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.compensation.destroyAll.success'),
      );

      getHistory().push('/compensation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: compensationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default compensationDestroyActions;
