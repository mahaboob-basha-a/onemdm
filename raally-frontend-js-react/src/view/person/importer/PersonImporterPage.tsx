import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/person/importer/personImporterActions';
import fields from 'src/modules/person/importer/personImporterFields';
import selectors from 'src/modules/person/importer/personImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.person.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.person.menu'), '/person'],
          [i18n('entities.person.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.person.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PersonImportPage;
