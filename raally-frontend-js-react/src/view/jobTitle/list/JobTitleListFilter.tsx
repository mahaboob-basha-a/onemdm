import { i18n } from 'src/i18n';
import actions from 'src/modules/jobTitle/list/jobTitleListActions';
import selectors from 'src/modules/jobTitle/list/jobTitleListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.jobTitle.fields.person'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.jobTitle.fields.title'),
  ),
  effectiveDateRange: yupFilterSchemas.dateRange(
    i18n('entities.jobTitle.fields.effectiveDateRange'),
  ),
});

const emptyValues = {
  person: null,
  title: null,
  effectiveDateRange: [],
}

const previewRenders = {
  person: {
      label: i18n('entities.jobTitle.fields.person'),
      render: filterRenders.relationToOne(),
    },
  title: {
    label: i18n('entities.jobTitle.fields.title'),
    render: filterRenders.generic(),
  },
  effectiveDateRange: {
    label: i18n('entities.jobTitle.fields.effectiveDateRange'),
    render: filterRenders.dateRange(),
  },
}

function JobTitleListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
                      <PersonAutocompleteFormItem  
                        name="person"
                        label={i18n('entities.jobTitle.fields.person')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="title"
                        label={i18n('entities.jobTitle.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="effectiveDateRange"
                        label={i18n('entities.jobTitle.fields.effectiveDateRange')}    
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default JobTitleListFilter;