import listActions from 'src/modules/jobTitle/list/jobTitleListActions';
import JobTitleService from 'src/modules/jobTitle/jobTitleService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'JOBTITLE_DESTROY';

const jobTitleDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: jobTitleDestroyActions.DESTROY_STARTED,
      });

      await JobTitleService.destroyAll([id]);

      dispatch({
        type: jobTitleDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.jobTitle.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/job-title');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: jobTitleDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: jobTitleDestroyActions.DESTROY_ALL_STARTED,
      });

      await JobTitleService.destroyAll(ids);

      dispatch({
        type: jobTitleDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.jobTitle.destroyAll.success'),
      );

      getHistory().push('/job-title');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: jobTitleDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default jobTitleDestroyActions;
