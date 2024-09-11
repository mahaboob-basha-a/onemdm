import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import compensationEnumerators from 'src/modules/compensation/compensationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.compensation.fields.person'),
    {
      "required": true
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.compensation.fields.type'),
    {
      "required": true,
      "options": compensationEnumerators.type
    },
  ),
  workAvailability: yupFormSchemas.integer(
    i18n('entities.compensation.fields.workAvailability'),
    {
      "max": 60,
      "min": 5,
      "required": true
    },
  ),
  monetary: yupFormSchemas.decimal(
    i18n('entities.compensation.fields.monetary'),
    {
      "min": 0,
      "required": true
    },
  ),
  paidTimeOff: yupFormSchemas.integer(
    i18n('entities.compensation.fields.paidTimeOff'),
    {
      "required": true,
      "min": 0
    },
  ),
  otherBenefits: yupFormSchemas.string(
    i18n('entities.compensation.fields.otherBenefits'),
    {},
  ),
  effectiveDate: yupFormSchemas.date(
    i18n('entities.compensation.fields.effectiveDate'),
    {
      "required": true
    },
  ),
});

function CompensationForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      type: record.type,
      workAvailability: record.workAvailability,
      monetary: record.monetary,
      paidTimeOff: record.paidTimeOff,
      otherBenefits: record.otherBenefits,
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
                label={i18n('entities.compensation.fields.person')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="type"
                label={i18n('entities.compensation.fields.type')}
              placeholder={i18n('entities.compensation.placeholders.type')}
              hint={i18n('entities.compensation.hints.type')}
                options={compensationEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.compensation.enumerators.type.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="workAvailability"
                label={i18n('entities.compensation.fields.workAvailability')}
              placeholder={i18n('entities.compensation.placeholders.workAvailability')}
              hint={i18n('entities.compensation.hints.workAvailability')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="monetary"
                label={i18n('entities.compensation.fields.monetary')}
              placeholder={i18n('entities.compensation.placeholders.monetary')}
              hint={i18n('entities.compensation.hints.monetary')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="paidTimeOff"
                label={i18n('entities.compensation.fields.paidTimeOff')}
              placeholder={i18n('entities.compensation.placeholders.paidTimeOff')}
              hint={i18n('entities.compensation.hints.paidTimeOff')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="otherBenefits"
                label={i18n('entities.compensation.fields.otherBenefits')}
              hint={i18n('entities.compensation.hints.otherBenefits')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="effectiveDate"
                label={i18n('entities.compensation.fields.effectiveDate')}
              hint={i18n('entities.compensation.hints.effectiveDate')}
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

export default CompensationForm;
