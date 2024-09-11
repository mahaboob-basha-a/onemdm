import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/person/importer/personImporterSelectors';
import PersonService from 'src/modules/person/personService';
import fields from 'src/modules/person/importer/personImporterFields';
import { i18n } from 'src/i18n';

const personImporterActions = importerActions(
  'PERSON_IMPORTER',
  selectors,
  PersonService.import,
  fields,
  i18n('entities.person.importer.fileName'),
);

export default personImporterActions;