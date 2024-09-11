import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.jobTitle.fields.person'),
    {
      "required": true
    },
  ),
  title: yupFormSchemas.string(
    i18n('entities.jobTitle.fields.title'),
    {
      "required": true,
      "min": 3
    },
  ),
  effectiveDate: yupFormSchemas.date(
    i18n('entities.jobTitle.fields.effectiveDate'),
    {
      "required": true
    },
  ),
});

function JobTitleForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      title: record.title,
      effectiveDate: record.effectiveDate ? moment(record.effectiveDate, 'YYYY-MM-DD').toDate() : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?props.record.id:undefined, values);
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
              <PersonAutocompleteFormItem  
                name="person"
                label={i18n('entities.jobTitle.fields.person')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="title"
                label={i18n('entities.jobTitle.fields.title')}
              hint={i18n('entities.jobTitle.hints.title')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="effectiveDate"
                label={i18n('entities.jobTitle.fields.effectiveDate')}
              hint={i18n('entities.jobTitle.hints.effectiveDate')}
                required={true}
              />
            </div>
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

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default JobTitleForm;
