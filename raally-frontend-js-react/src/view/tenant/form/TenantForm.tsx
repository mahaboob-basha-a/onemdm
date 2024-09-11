import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import config from 'src/config';
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

function TenantForm(props) {
  const [initialValues] = useState(
    () => props.record || { name: '' },
  );

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;
    props.onSubmit(props.record?props.record.id:undefined, data);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n('tenant.fields.name')}
                required={true}
                autoFocus
              />
            </div>

            {tenantSubdomain.isEnabled && (
              <div className="col-lg-7 col-md-8 col-12">
                <InputFormItem
                  name="url"
                  label={i18n('tenant.fields.tenantUrl')}
                  endAdornment={`.${config.frontendUrl.host}`}
                />
              </div>
            )}
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default TenantForm;
