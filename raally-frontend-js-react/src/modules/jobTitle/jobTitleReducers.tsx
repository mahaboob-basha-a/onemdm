import list from 'src/modules/jobTitle/list/jobTitleListReducers';
import form from 'src/modules/jobTitle/form/jobTitleFormReducers';
import view from 'src/modules/jobTitle/view/jobTitleViewReducers';
import destroy from 'src/modules/jobTitle/destroy/jobTitleDestroyReducers';
import importerReducer from 'src/modules/jobTitle/importer/jobTitleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
