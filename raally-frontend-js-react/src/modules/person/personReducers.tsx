import list from 'src/modules/person/list/personListReducers';
import form from 'src/modules/person/form/personFormReducers';
import view from 'src/modules/person/view/personViewReducers';
import destroy from 'src/modules/person/destroy/personDestroyReducers';
import importerReducer from 'src/modules/person/importer/personImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
