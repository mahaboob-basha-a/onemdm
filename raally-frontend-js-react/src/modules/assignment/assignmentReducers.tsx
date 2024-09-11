import list from 'src/modules/assignment/list/assignmentListReducers';
import form from 'src/modules/assignment/form/assignmentFormReducers';
import view from 'src/modules/assignment/view/assignmentViewReducers';
import destroy from 'src/modules/assignment/destroy/assignmentDestroyReducers';
import importerReducer from 'src/modules/assignment/importer/assignmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
