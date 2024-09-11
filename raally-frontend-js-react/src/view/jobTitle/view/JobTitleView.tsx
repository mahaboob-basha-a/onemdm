import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';

function JobTitleView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <PersonViewItem
        label={i18n('entities.jobTitle.fields.person')}
        value={record.person}
      />

      <TextViewItem
        label={i18n('entities.jobTitle.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.jobTitle.fields.effectiveDate')}
        value={record.effectiveDate}
      />
    </ViewWrapper>
  );
}

export default JobTitleView;
