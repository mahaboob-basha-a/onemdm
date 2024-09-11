import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import projectEnumerators from 'src/modules/project/projectEnumerators';

const schema = yup.object().shape({
  projectId: yupFormSchemas.string(
    i18n('entities.project.fields.projectId'),
    {
      "required": true
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.project.fields.name'),
    {
      "required": true,
      "min": 3
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.project.fields.type'),
    {
      "required": true,
      "options": projectEnumerators.type
    },
  ),
});

function ProjectForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      projectId: record.projectId,
      name: record.name,
      type: record.type,
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
              <InputFormItem
                name="projectId"
                label={i18n('entities.project.fields.projectId')}
              placeholder={i18n('entities.project.placeholders.projectId')}
              hint={i18n('entities.project.hints.projectId')}
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="name"
                label={i18n('entities.project.fields.name')}
              placeholder={i18n('entities.project.placeholders.name')}
              hint={i18n('entities.project.hints.name')}
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="type"
                label={i18n('entities.project.fields.type')}
              placeholder={i18n('entities.project.placeholders.type')}
              hint={i18n('entities.project.hints.type')}
                options={projectEnumerators.type.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.project.enumerators.type.${value}`,
                    ),
                  }),
                )}
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

export default ProjectForm;
