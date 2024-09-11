import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fullName',
    label: i18n('entities.person.fields.fullName'),
    schema: schemas.string(
      i18n('entities.person.fields.fullName'),
      {
        "required": true
      },
    ),
  },
];