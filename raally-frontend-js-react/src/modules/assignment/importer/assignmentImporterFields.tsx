import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import assignmentEnumerators from 'src/modules/assignment/assignmentEnumerators';
import moment from 'moment';

export default [
  {
    name: 'person',
    label: i18n('entities.assignment.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.assignment.fields.person'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'project',
    label: i18n('entities.assignment.fields.project'),
    schema: schemas.relationToOne(
      i18n('entities.assignment.fields.project'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'hoursPerWeek',
    label: i18n('entities.assignment.fields.hoursPerWeek'),
    schema: schemas.integer(
      i18n('entities.assignment.fields.hoursPerWeek'),
      {
        "required": true,
        "min": 0,
        "max": 40
      },
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.assignment.fields.startDate'),
    schema: schemas.date(
      i18n('entities.assignment.fields.startDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.assignment.fields.endDate'),
    schema: schemas.date(
      i18n('entities.assignment.fields.endDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'role',
    label: i18n('entities.assignment.fields.role'),
    schema: schemas.enumerator(
      i18n('entities.assignment.fields.role'),
      {
        "required": true,
        "options": assignmentEnumerators.role
      },
    ),
  },
  {
    name: 'notes',
    label: i18n('entities.assignment.fields.notes'),
    schema: schemas.string(
      i18n('entities.assignment.fields.notes'),
      {},
    ),
  },
];