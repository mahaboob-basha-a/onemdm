import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/jobTitle/view/jobTitleViewActions';
import selectors from 'src/modules/jobTitle/view/jobTitleViewSelectors';
import JobTitleView from 'src/view/jobTitle/view/JobTitleView';
import JobTitleViewToolbar from 'src/view/jobTitle/view/JobTitleViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function JobTitlePage() {
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
          [i18n('entities.jobTitle.menu'), '/job-title'],
          [i18n('entities.jobTitle.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.jobTitle.view.title')}
        </PageTitle>

        <JobTitleViewToolbar match={match} />

        <JobTitleView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default JobTitlePage;
