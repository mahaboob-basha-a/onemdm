import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/project/view/projectViewActions';
import selectors from 'src/modules/project/view/projectViewSelectors';
import ProjectView from 'src/view/project/view/ProjectView';
import ProjectViewToolbar from 'src/view/project/view/ProjectViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ProjectPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.project.menu'), '/project'],
          [i18n('entities.project.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.project.view.title')}
        </PageTitle>

        <ProjectViewToolbar match={match} />

        <ProjectView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ProjectPage;
