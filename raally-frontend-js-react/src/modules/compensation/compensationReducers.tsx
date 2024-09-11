import list from 'src/modules/compensation/list/compensationListReducers';
import form from 'src/modules/compensation/form/compensationFormReducers';
import view from 'src/modules/compensation/view/compensationViewReducers';
import destroy from 'src/modules/compensation/destroy/compensationDestroyReducers';
import importerReducer from 'src/modules/compensation/importer/compensationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
