import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import compensationEnumerators from 'src/modules/compensation/compensationEnumerators';
import moment from 'moment';

export default [
  {
    name: 'person',
    label: i18n('entities.compensation.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.compensation.fields.person'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.compensation.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.compensation.fields.type'),
      {
        "required": true,
        "options": compensationEnumerators.type
      },
    ),
  },
  {
    name: 'workAvailability',
    label: i18n('entities.compensation.fields.workAvailability'),
    schema: schemas.integer(
      i18n('entities.compensation.fields.workAvailability'),
      {
        "max": 60,
        "min": 5,
        "required": true
      },
    ),
  },
  {
    name: 'monetary',
    label: i18n('entities.compensation.fields.monetary'),
    schema: schemas.decimal(
      i18n('entities.compensation.fields.monetary'),
      {
        "min": 0,
        "required": true
      },
    ),
  },
  {
    name: 'paidTimeOff',
    label: i18n('entities.compensation.fields.paidTimeOff'),
    schema: schemas.integer(
      i18n('entities.compensation.fields.paidTimeOff'),
      {
        "required": true,
        "min": 0
      },
    ),
  },
  {
    name: 'otherBenefits',
    label: i18n('entities.compensation.fields.otherBenefits'),
    schema: schemas.string(
      i18n('entities.compensation.fields.otherBenefits'),
      {},
    ),
  },
  {
    name: 'effectiveDate',
    label: i18n('entities.compensation.fields.effectiveDate'),
    schema: schemas.date(
      i18n('entities.compensation.fields.effectiveDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];