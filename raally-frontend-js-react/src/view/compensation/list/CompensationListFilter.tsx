import { i18n } from 'src/i18n';
import actions from 'src/modules/compensation/list/compensationListActions';
import selectors from 'src/modules/compensation/list/compensationListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import compensationEnumerators from 'src/modules/compensation/compensationEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.compensation.fields.person'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.compensation.fields.type'),
  ),
  workAvailabilityRange: yupFilterSchemas.integerRange(
    i18n('entities.compensation.fields.workAvailabilityRange'),
  ),
  monetaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.compensation.fields.monetaryRange'),
  ),
  paidTimeOffRange: yupFilterSchemas.integerRange(
    i18n('entities.compensation.fields.paidTimeOffRange'),
  ),
  effectiveDateRange: yupFilterSchemas.dateRange(
    i18n('entities.compensation.fields.effectiveDateRange'),
  ),
});

const emptyValues = {
  person: null,
  type: null,
  workAvailabilityRange: [],
  monetaryRange: [],
  paidTimeOffRange: [],
  effectiveDateRange: [],
}

const previewRenders = {
  person: {
      label: i18n('entities.compensation.fields.person'),
      render: filterRenders.relationToOne(),
    },
  type: {
    label: i18n('entities.compensation.fields.type'),
    render: filterRenders.enumerator('entities.compensation.enumerators.type',),
  },
  workAvailabilityRange: {
    label: i18n('entities.compensation.fields.workAvailabilityRange'),
    render: filterRenders.range(),
  },
  monetaryRange: {
    label: i18n('entities.compensation.fields.monetaryRange'),
    render: filterRenders.decimalRange(),
  },
  paidTimeOffRange: {
    label: i18n('entities.compensation.fields.paidTimeOffRange'),
    render: filterRenders.range(),
  },
  effectiveDateRange: {
    label: i18n('entities.compensation.fields.effectiveDateRange'),
    render: filterRenders.dateRange(),
  },
}

function CompensationListFilter(props) {
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
                        label={i18n('entities.compensation.fields.person')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="type"
                        label={i18n('entities.compensation.fields.type')}
                        options={compensationEnumerators.type.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.compensation.enumerators.type.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="workAvailabilityRange"
                        label={i18n('entities.compensation.fields.workAvailabilityRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="monetaryRange"
                        label={i18n('entities.compensation.fields.monetaryRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="paidTimeOffRange"
                        label={i18n('entities.compensation.fields.paidTimeOffRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="effectiveDateRange"
                        label={i18n('entities.compensation.fields.effectiveDateRange')}    
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

export default CompensationListFilter;