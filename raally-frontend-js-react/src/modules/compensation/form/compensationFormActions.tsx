import CompensationService from 'src/modules/compensation/compensationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'COMPENSATION_FORM';

const compensationFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: compensationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CompensationService.find(id);
      }

      dispatch({
        type: compensationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: compensationFormActions.INIT_ERROR,
      });

      getHistory().push('/compensation');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: compensationFormActions.CREATE_STARTED,
      });

      await CompensationService.create(values);

      dispatch({
        type: compensationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.compensation.create.success'),
      );

      getHistory().push('/compensation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: compensationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: compensationFormActions.UPDATE_STARTED,
      });

      await CompensationService.update(id, values);

      dispatch({
        type: compensationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.compensation.update.success'),
      );

      getHistory().push('/compensation');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: compensationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default compensationFormActions;
