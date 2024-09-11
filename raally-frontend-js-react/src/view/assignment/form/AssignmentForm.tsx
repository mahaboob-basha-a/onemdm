import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import assignmentEnumerators from 'src/modules/assignment/assignmentEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import ProjectAutocompleteFormItem from 'src/view/project/autocomplete/ProjectAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFormSchemas.relationToOne(
    i18n('entities.assignment.fields.person'),
    {
      "required": true
    },
  ),
  project: yupFormSchemas.relationToOne(
    i18n('entities.assignment.fields.project'),
    {
      "required": true
    },
  ),
  hoursPerWeek: yupFormSchemas.integer(
    i18n('entities.assignment.fields.hoursPerWeek'),
    {
      "required": true,
      "min": 0,
      "max": 40
    },
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.assignment.fields.startDate'),
    {
      "required": true
    },
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.assignment.fields.endDate'),
    {},
  ),
  role: yupFormSchemas.enumerator(
    i18n('entities.assignment.fields.role'),
    {
      "required": true,
      "options": assignmentEnumerators.role
    },
  ),
  notes: yupFormSchemas.string(
    i18n('entities.assignment.fields.notes'),
    {},
  ),
});

function AssignmentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      person: record.person,
      project: record.project,
      hoursPerWeek: record.hoursPerWeek,
      startDate: record.startDate ? moment(record.startDate, 'YYYY-MM-DD').toDate() : null,
      endDate: record.endDate ? moment(record.endDate, 'YYYY-MM-DD').toDate() : null,
      role: record.role,
      notes: record.notes,
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
                label={i18n('entities.assignment.fields.person')}
              placeholder={i18n('entities.assignment.placeholders.person')}
              hint={i18n('entities.assignment.hints.person')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ProjectAutocompleteFormItem  
                name="project"
                label={i18n('entities.assignment.fields.project')}
              placeholder={i18n('entities.assignment.placeholders.project')}
              hint={i18n('entities.assignment.hints.project')}
                required={true}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="hoursPerWeek"
                label={i18n('entities.assignment.fields.hoursPerWeek')}
              placeholder={i18n('entities.assignment.placeholders.hoursPerWeek')}
              hint={i18n('entities.assignment.hints.hoursPerWeek')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="startDate"
                label={i18n('entities.assignment.fields.startDate')}
              hint={i18n('entities.assignment.hints.startDate')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="endDate"
                label={i18n('entities.assignment.fields.endDate')}
              hint={i18n('entities.assignment.hints.endDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="role"
                label={i18n('entities.assignment.fields.role')}
              hint={i18n('entities.assignment.hints.role')}
                options={assignmentEnumerators.role.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.assignment.enumerators.role.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="notes"
                label={i18n('entities.assignment.fields.notes')}
              placeholder={i18n('entities.assignment.placeholders.notes')}
              hint={i18n('entities.assignment.hints.notes')}
                required={false}
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

export default AssignmentForm;
