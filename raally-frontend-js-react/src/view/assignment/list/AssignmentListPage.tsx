import React from 'react';
import { i18n } from 'src/i18n';
import AssignmentListFilter from 'src/view/assignment/list/AssignmentListFilter';
import AssignmentListTable from 'src/view/assignment/list/AssignmentListTable';
import AssignmentListToolbar from 'src/view/assignment/list/AssignmentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssignmentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assignment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assignment.list.title')}
        </PageTitle>

        <AssignmentListToolbar />
        <AssignmentListFilter />
        <AssignmentListTable />
      </ContentWrapper>
    </>
  );
}

export default AssignmentListPage;
