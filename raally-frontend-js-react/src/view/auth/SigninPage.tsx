import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import Content from 'src/view/auth/styles/Content';
import Logo from 'src/view/auth/styles/Logo';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import I18nFlags from 'src/view/layout/I18nFlags';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import SocialButtons from 'src/view/auth/styles/SocialButtons';
// import config from 'src/config';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Message from 'src/view/shared/message';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  rememberMe: yupFormSchemas.boolean(
    i18n('user.fields.rememberMe'),
  ),
});

function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const { socialErrorCode } = queryString.parse(
    location.search,
  );

  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );

  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(
          i18n(`auth.social.errors.${socialErrorCode}`),
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(
      actions.doSigninWithEmailAndPassword(
        email,
        password,
        rememberMe,
      ),
    );
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signin.jpg'
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

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputFormItem
              name="email"
              placeholder={i18n('user.fields.email')}
              autoComplete="email"
              autoFocus
              externalErrorMessage={externalErrorMessage}
            />

            <InputFormItem
              name="password"
              placeholder={i18n('user.fields.password')}
              autoComplete="password"
              type="password"
            />

            <div className="d-flex form-group">
              <div className="form-check col-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={'rememberMe'}
                  name={'rememberMe'}
                  ref={form.register}
                />

                <label
                  className="form-check-label"
                  htmlFor={'rememberMe'}
                >
                  {i18n('user.fields.rememberMe')}
                </label>
              </div>

              <div className="col-6 pr-0">
                <Link
                  className="btn btn-sm btn-link"
                  style={{ float: 'right' }}
                  to="/auth/forgot-password"
                >
                  {i18n('auth.forgotPassword')}
                </Link>
              </div>
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={loading}
            >
              <ButtonIcon loading={loading} />{' '}
              {i18n('auth.signin')}
            </button>            

            <OtherActions>
              <Link
                className="btn btn-sm btn-link"
                to="/auth/signup"
              >
                {i18n('auth.createAnAccount')}
              </Link>
            </OtherActions>

            <I18nFlags style={{ marginTop: '24px' }} />
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
}

export default SigninPage;
