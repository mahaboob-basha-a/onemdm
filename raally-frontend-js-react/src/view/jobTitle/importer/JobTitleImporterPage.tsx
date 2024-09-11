import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/jobTitle/importer/jobTitleImporterActions';
import fields from 'src/modules/jobTitle/importer/jobTitleImporterFields';
import selectors from 'src/modules/jobTitle/importer/jobTitleImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function JobTitleImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.jobTitle.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.jobTitle.menu'), '/job-title'],
          [i18n('entities.jobTitle.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.jobTitle.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default JobTitleImportPage;
