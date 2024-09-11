import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PersonViewItem from 'src/view/person/view/PersonViewItem';
import ProjectViewItem from 'src/view/project/view/ProjectViewItem';

function AssignmentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <PersonViewItem
        label={i18n('entities.assignment.fields.person')}
        value={record.person}
      />

      <ProjectViewItem
        label={i18n('entities.assignment.fields.project')}
        value={record.project}
      />

      <TextViewItem
        label={i18n('entities.assignment.fields.hoursPerWeek')}
        value={record.hoursPerWeek}
      />

      <TextViewItem
        label={i18n('entities.assignment.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.assignment.fields.endDate')}
        value={record.endDate}
      />

      <TextViewItem
        label={i18n('entities.assignment.fields.role')}
        value={
          record.role &&
          i18n(
            `entities.assignment.enumerators.role.${record.role}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.assignment.fields.notes')}
        value={record.notes}
      />
    </ViewWrapper>
  );
}

export default AssignmentView;
