import CompensationService from 'src/modules/compensation/compensationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'COMPENSATION_VIEW';

const compensationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: compensationViewActions.FIND_STARTED,
      });

      const record = await CompensationService.find(id);

      dispatch({
        type: compensationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: compensationViewActions.FIND_ERROR,
      });

      getHistory().push('/compensation');
    }
  },
};

export default compensationViewActions;
