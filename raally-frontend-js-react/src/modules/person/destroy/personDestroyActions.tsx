import listActions from 'src/modules/person/list/personListActions';
import PersonService from 'src/modules/person/personService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PERSON_DESTROY';

const personDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: personDestroyActions.DESTROY_STARTED,
      });

      await PersonService.destroyAll([id]);

      dispatch({
        type: personDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.person.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/person');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: personDestroyActions.DESTROY_ALL_STARTED,
      });

      await PersonService.destroyAll(ids);

      dispatch({
        type: personDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.person.destroyAll.success'),
      );

      getHistory().push('/person');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: personDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default personDestroyActions;
