import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/compensation/importer/compensationImporterSelectors';
import CompensationService from 'src/modules/compensation/compensationService';
import fields from 'src/modules/compensation/importer/compensationImporterFields';
import { i18n } from 'src/i18n';

const compensationImporterActions = importerActions(
  'COMPENSATION_IMPORTER',
  selectors,
  CompensationService.import,
  fields,
  i18n('entities.compensation.importer.fileName'),
);

export default compensationImporterActions;