import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.compensation.fields.id'),
  },
  {
    name: 'person',
    label: i18n('entities.compensation.fields.person'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'type',
    label: i18n('entities.compensation.fields.type'),
  },
  {
    name: 'workAvailability',
    label: i18n('entities.compensation.fields.workAvailability'),
  },
  {
    name: 'monetary',
    label: i18n('entities.compensation.fields.monetary'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'paidTimeOff',
    label: i18n('entities.compensation.fields.paidTimeOff'),
  },
  {
    name: 'otherBenefits',
    label: i18n('entities.compensation.fields.otherBenefits'),
  },
  {
    name: 'effectiveDate',
    label: i18n('entities.compensation.fields.effectiveDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.compensation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.compensation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
