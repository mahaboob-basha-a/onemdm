import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import actions from 'src/modules/tenant/form/tenantFormActions';
import selectors from 'src/modules/tenant/form/tenantFormSelectors';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';
import config from 'src/config';
import { urlfy } from '../shared/urlfy';
import { tenantSubdomain } from 'src/modules/tenant/tenantSubdomain';
import { yupResolver } from '@hookform/resolvers/yup';

const schemaWithUrl = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('tenant.fields.tenantName'),
    {
      required: true,
      max: 50,
    },
  ),
  url: yupFormSchemas
    .string(i18n('tenant.fields.tenantUrl'), {
      required: true,
      max: 50,
    })
    .matches(
      /^[a-z0-9][-a-zA-Z0-9]*$/,
      i18n('tenant.validation.url'),
    ),
});

const schemaWithoutUrl = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('tenant.fields.tenantName'),
    {
      required: true,
      max: 50,
    },
  ),
});

const schema = tenantSubdomain.isEnabled
  ? schemaWithUrl
  : schemaWithoutUrl;

function TenantNewForm(props) {
  const dispatch = useDispatch();

  const [initialValues] = useState({
    name: '',
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const loading = useSelector(selectors.selectSaveLoading);

  const invitedTenants = useSelector(
    authSelectors.selectInvitedTenants,
  );

  const onSubmit = (values) => {
    dispatch(actions.doCreate(values));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputFormItem
          name="name"
          label={i18n('tenant.fields.tenantName')}
          autoComplete="name"
          onChange={(value) => {
            // @ts-ignore
            form.setValue('url', urlfy(value));
          }}
          autoFocus
        />

        {tenantSubdomain.isEnabled && (
          <InputFormItem
            name="url"
            placeholder={i18n('tenant.fields.tenantUrl')}
            endAdornment={`.${config.frontendUrl.host}`}
          />
        )}

        <button
          style={{ marginTop: '16px' }}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {i18n('tenant.create.button')}
        </button>

        {Boolean(invitedTenants.length) && (
          <button
            style={{ marginTop: '16px' }}
            type="button"
            className="btn btn-light btn-block"
            onClick={props.onViewToggle}
          >
            {i18n('tenant.invitation.view')}
          </button>
        )}
      </form>
    </FormProvider>
  );
}

export default TenantNewForm;
