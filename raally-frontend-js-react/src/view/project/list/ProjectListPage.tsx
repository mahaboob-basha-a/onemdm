import React from 'react';
import { i18n } from 'src/i18n';
import ProjectListFilter from 'src/view/project/list/ProjectListFilter';
import ProjectListTable from 'src/view/project/list/ProjectListTable';
import ProjectListToolbar from 'src/view/project/list/ProjectListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProjectListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.project.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.project.list.title')}
        </PageTitle>

        <ProjectListToolbar />
        <ProjectListFilter />
        <ProjectListTable />
      </ContentWrapper>
    </>
  );
}

export default ProjectListPage;
