import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import projectEnumerators from 'src/modules/project/projectEnumerators';

export default [
  {
    name: 'projectId',
    label: i18n('entities.project.fields.projectId'),
    schema: schemas.string(
      i18n('entities.project.fields.projectId'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'name',
    label: i18n('entities.project.fields.name'),
    schema: schemas.string(
      i18n('entities.project.fields.name'),
      {
        "required": true,
        "min": 3
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.project.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.project.fields.type'),
      {
        "required": true,
        "options": projectEnumerators.type
      },
    ),
  },
];