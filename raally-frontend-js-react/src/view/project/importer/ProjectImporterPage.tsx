import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/project/importer/projectImporterActions';
import fields from 'src/modules/project/importer/projectImporterFields';
import selectors from 'src/modules/project/importer/projectImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProjectImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.project.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.project.menu'), '/project'],
          [i18n('entities.project.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.project.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ProjectImportPage;
