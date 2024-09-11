import PersonService from 'src/modules/person/personService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PERSON_VIEW';

const personViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: personViewActions.FIND_STARTED,
      });

      const record = await PersonService.find(id);

      dispatch({
        type: personViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: personViewActions.FIND_ERROR,
      });

      getHistory().push('/person');
    }
  },
};

export default personViewActions;
