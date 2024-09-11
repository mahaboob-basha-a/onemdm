import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.project.fields.id'),
  },
  {
    name: 'projectId',
    label: i18n('entities.project.fields.projectId'),
  },
  {
    name: 'name',
    label: i18n('entities.project.fields.name'),
  },
  {
    name: 'type',
    label: i18n('entities.project.fields.type'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.project.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.project.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
