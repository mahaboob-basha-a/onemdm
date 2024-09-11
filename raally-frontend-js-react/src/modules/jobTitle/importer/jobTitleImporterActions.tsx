import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/jobTitle/importer/jobTitleImporterSelectors';
import JobTitleService from 'src/modules/jobTitle/jobTitleService';
import fields from 'src/modules/jobTitle/importer/jobTitleImporterFields';
import { i18n } from 'src/i18n';

const jobTitleImporterActions = importerActions(
  'JOBTITLE_IMPORTER',
  selectors,
  JobTitleService.import,
  fields,
  i18n('entities.jobTitle.importer.fileName'),
);

export default jobTitleImporterActions;