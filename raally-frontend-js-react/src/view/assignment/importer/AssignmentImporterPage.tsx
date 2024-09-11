import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assignment/importer/assignmentImporterActions';
import fields from 'src/modules/assignment/importer/assignmentImporterFields';
import selectors from 'src/modules/assignment/importer/assignmentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssignmentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.assignment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assignment.menu'), '/assignment'],
          [i18n('entities.assignment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assignment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AssignmentImportPage;
