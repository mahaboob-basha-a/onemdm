import React from 'react';
import { i18n } from 'src/i18n';
import PersonListFilter from 'src/view/person/list/PersonListFilter';
import PersonListTable from 'src/view/person/list/PersonListTable';
import PersonListToolbar from 'src/view/person/list/PersonListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.person.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.person.list.title')}
        </PageTitle>

        <PersonListToolbar />
        <PersonListFilter />
        <PersonListTable />
      </ContentWrapper>
    </>
  );
}

export default PersonListPage;
