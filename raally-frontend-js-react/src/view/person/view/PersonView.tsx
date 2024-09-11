import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonAssignmentsTable from 'src/view/person/view/PersonAssignmentsTable';

function PersonView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.person.fields.fullName')}
        value={record.fullName}
      />
      <PersonAssignmentsTable label={i18n('entities.assignment.label')} assignments={record.assignments} />
    </ViewWrapper>
  );
}

export default PersonView;
