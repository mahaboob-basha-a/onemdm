import React from 'react';
import { i18n } from 'src/i18n';
import CompensationListFilter from 'src/view/compensation/list/CompensationListFilter';
import CompensationListTable from 'src/view/compensation/list/CompensationListTable';
import CompensationListToolbar from 'src/view/compensation/list/CompensationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompensationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.compensation.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.compensation.list.title')}
        </PageTitle>

        <CompensationListToolbar />
        <CompensationListFilter />
        <CompensationListTable />
      </ContentWrapper>
    </>
  );
}

export default CompensationListPage;
