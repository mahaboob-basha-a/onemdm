import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/settings/settingsActions';
import selectors from 'src/modules/settings/settingsSelectors';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import settingsEnumerators from 'src/modules/settings/settingsEnumerators';
import ImagesFormItem from '../shared/form/items/ImagesFormItem';
import Storage from 'src/security/storage';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  theme: yup
    .string()
    .transform((cv, ov) => {
      return ov === '' ? null : cv;
    })
    .nullable(true)
    .trim()
    .label(i18n('settings.fields.theme'))
    .required(),
  logos: yupFormSchemas.files(
    i18n('settings.fields.logos'),
    {
      max: 1,
    },
  ),
  backgroundImages: yupFormSchemas.files(
    i18n('settings.fields.backgroundImages'),
    {
      max: 1,
    },
  ),
});

function SettingsForm(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const settings = props.settings;

  const [initialValues] = useState(() => {
    return {
      ...(settings || {}),
      theme: (settings && settings.theme) || 'default',
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    dispatch(actions.doSave(values));
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
              <SelectFormItem
                name={'theme'}
                label={i18n('settings.fields.theme')}
                options={settingsEnumerators.theme.map(
                  (value) => ({
                    value: value.id,
                    label: i18n(
                      `settings.colors.${value.id}`,
                    ),
                  }),
                )}
                required={true}
              ></SelectFormItem>
            </div>

            {/* <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="logos"
                label={i18n('settings.fields.logos')}
                storage={Storage.values.settingsLogos}
                max={1}
              />
            </div> */}
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="backgroundImages"
                label={i18n(
                  'settings.fields.backgroundImages',
                )}                
                storage={
                  Storage.values.settingsBackgroundImages
                }
                max={1}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              disabled={saveLoading}
              onClick={onReset}
              className="btn btn-light"
              type="button"
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                className="btn btn-light"
                type="button"
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

export default SettingsForm;
