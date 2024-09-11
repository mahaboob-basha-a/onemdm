import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/compensation/importer/compensationImporterActions';
import fields from 'src/modules/compensation/importer/compensationImporterFields';
import selectors from 'src/modules/compensation/importer/compensationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CompensationImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.compensation.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.compensation.menu'), '/compensation'],
          [i18n('entities.compensation.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.compensation.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CompensationImportPage;
