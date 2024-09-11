import { i18n } from 'src/i18n';
import invitationActions from 'src/modules/tenant/invitation/tenantInvitationActions';
import { getHistory } from 'src/modules/store';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Content from 'src/view/auth/styles/Content';
import Wrapper from 'src/view/auth/styles/Wrapper';
import Logo from 'src/view/auth/styles/Logo';
import Spinner from 'src/view/shared/Spinner';
import invitationSelectors from 'src/modules/tenant/invitation/tenantInvitationSelectors';
import authActions from 'src/modules/auth/authActions';
import { useLocation } from 'react-router-dom';
import OtherActions from 'src/view/auth/styles/OtherActions';
import selectors from 'src/modules/auth/authSelectors';

function InviationPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const loading = useSelector(
    invitationSelectors.selectLoading,
  );
  const warningMessage = useSelector(
    invitationSelectors.selectWarningMessage,
  );
  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const token = queryString.parse(location.search).token;

  useEffect(() => {
    dispatch(invitationActions.doAcceptFromAuth(token));
  }, [dispatch, token]);

  const doAcceptWithWrongEmail = () => {
    dispatch(
      invitationActions.doAcceptFromAuth(token, true),
    );
  };

  const doSignout = async () => {
    await dispatch(authActions.doSignout());
    getHistory().push('/');
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/invitation.jpg'
        })`,
      }}
    >
      <Content>
        <Logo>
          {logoUrl ? (
            <img
              src={logoUrl}
              width="240px"
              alt={i18n('app.title')}
            />
          ) : (
            <h1>{i18n('app.title')}</h1>
          )}
        </Logo>

        {loading && <Spinner />}

        {Boolean(warningMessage) && (
          <h4
            style={{
              textAlign: 'center',
            }}
          >
            {warningMessage}
          </h4>
        )}

        {Boolean(warningMessage) && (
          <button
            style={{ marginTop: '24px' }}
            type="submit"
            className="btn btn-primary btn-block"
            onClick={doAcceptWithWrongEmail}
          >
            {i18n('tenant.invitation.acceptWrongEmail')}
          </button>
        )}

        {!loading && (
          <OtherActions>
            <button
              className="btn btn-sm btn-link"
              type="button"
              onClick={doSignout}
            >
              {i18n('auth.signout')}
            </button>
          </OtherActions>
        )}
      </Content>
    </Wrapper>
  );
}

export default InviationPage;
