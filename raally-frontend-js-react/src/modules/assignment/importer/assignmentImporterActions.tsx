import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/assignment/importer/assignmentImporterSelectors';
import AssignmentService from 'src/modules/assignment/assignmentService';
import fields from 'src/modules/assignment/importer/assignmentImporterFields';
import { i18n } from 'src/i18n';

const assignmentImporterActions = importerActions(
  'ASSIGNMENT_IMPORTER',
  selectors,
  AssignmentService.import,
  fields,
  i18n('entities.assignment.importer.fileName'),
);

export default assignmentImporterActions;