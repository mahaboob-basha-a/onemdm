import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'person',
    label: i18n('entities.jobTitle.fields.person'),
    schema: schemas.relationToOne(
      i18n('entities.jobTitle.fields.person'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'title',
    label: i18n('entities.jobTitle.fields.title'),
    schema: schemas.string(
      i18n('entities.jobTitle.fields.title'),
      {
        "required": true,
        "min": 3
      },
    ),
  },
  {
    name: 'effectiveDate',
    label: i18n('entities.jobTitle.fields.effectiveDate'),
    schema: schemas.date(
      i18n('entities.jobTitle.fields.effectiveDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
];