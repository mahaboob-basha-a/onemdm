import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.jobTitle.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.jobTitle.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'title',
    label: i18n('entities.jobTitle.fields.title'),
  },
  {
    name: 'effectiveDate',
    label: i18n('entities.jobTitle.fields.effectiveDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.jobTitle.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.jobTitle.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
