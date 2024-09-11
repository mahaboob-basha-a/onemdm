import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';

function CompensationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <PersonViewItem
        label={i18n('entities.compensation.fields.person')}
        value={record.person}
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.compensation.enumerators.type.${record.type}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.workAvailability')}
        value={record.workAvailability}
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.monetary')}
        value={record.monetary}
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.paidTimeOff')}
        value={record.paidTimeOff}
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.otherBenefits')}
        value={record.otherBenefits}
      />

      <TextViewItem
        label={i18n('entities.compensation.fields.effectiveDate')}
        value={record.effectiveDate}
      />
    </ViewWrapper>
  );
}

export default CompensationView;
