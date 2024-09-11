import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProjectMembersTable from 'src/view/project/view/ProjectMembersTable';

function ProjectView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.project.fields.projectId')}
        value={record.projectId}
      />

      <TextViewItem
        label={i18n('entities.project.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.project.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.project.enumerators.type.${record.type}`,
          )
        }
      />

      <ProjectMembersTable label={i18n('entities.project.fields.teamMembers')} assignments={record.teamMembers} />
    </ViewWrapper>
  );
}

export default ProjectView;
