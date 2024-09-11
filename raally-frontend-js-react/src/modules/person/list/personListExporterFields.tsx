import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.person.fields.id'),
  },
  {
    name: 'fullName',
    label: i18n('entities.person.fields.fullName'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.person.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.person.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
