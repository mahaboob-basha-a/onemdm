import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assignment.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.assignment.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'project',
    label: i18n('entities.assignment.fields.project'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'hoursPerWeek',
    label: i18n('entities.assignment.fields.hoursPerWeek'),
  },
  {
    name: 'startDate',
    label: i18n('entities.assignment.fields.startDate'),
  },
  {
    name: 'endDate',
    label: i18n('entities.assignment.fields.endDate'),
  },
  {
    name: 'role',
    label: i18n('entities.assignment.fields.role'),
  },
  {
    name: 'notes',
    label: i18n('entities.assignment.fields.notes'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assignment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assignment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
