import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/person/view/personViewActions';
import selectors from 'src/modules/person/view/personViewSelectors';
import PersonView from 'src/view/person/view/PersonView';
import PersonViewToolbar from 'src/view/person/view/PersonViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PersonPage() {
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
          [i18n('entities.person.menu'), '/person'],
          [i18n('entities.person.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.person.view.title')}
        </PageTitle>

        <PersonViewToolbar match={match} />

        <PersonView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PersonPage;
