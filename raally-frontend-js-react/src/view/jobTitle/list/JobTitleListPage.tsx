import React from 'react';
import { i18n } from 'src/i18n';
import JobTitleListFilter from 'src/view/jobTitle/list/JobTitleListFilter';
import JobTitleListTable from 'src/view/jobTitle/list/JobTitleListTable';
import JobTitleListToolbar from 'src/view/jobTitle/list/JobTitleListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function JobTitleListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.jobTitle.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.jobTitle.list.title')}
        </PageTitle>

        <JobTitleListToolbar />
        <JobTitleListFilter />
        <JobTitleListTable />
      </ContentWrapper>
    </>
  );
}

export default JobTitleListPage;
