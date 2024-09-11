import { i18n } from 'src/i18n';
import actions from 'src/modules/assignment/list/assignmentListActions';
import selectors from 'src/modules/assignment/list/assignmentListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import assignmentEnumerators from 'src/modules/assignment/assignmentEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PersonAutocompleteFormItem from 'src/view/person/autocomplete/PersonAutocompleteFormItem';
import ProjectAutocompleteFormItem from 'src/view/project/autocomplete/ProjectAutocompleteFormItem';

const schema = yup.object().shape({
  person: yupFilterSchemas.relationToOne(
    i18n('entities.assignment.fields.person'),
  ),
  project: yupFilterSchemas.relationToOne(
    i18n('entities.assignment.fields.project'),
  ),
  hoursPerWeekRange: yupFilterSchemas.integerRange(
    i18n('entities.assignment.fields.hoursPerWeekRange'),
  ),
  startDateRange: yupFilterSchemas.dateRange(
    i18n('entities.assignment.fields.startDateRange'),
  ),
  endDateRange: yupFilterSchemas.dateRange(
    i18n('entities.assignment.fields.endDateRange'),
  ),
  role: yupFilterSchemas.enumerator(
    i18n('entities.assignment.fields.role'),
  ),
  notes: yupFilterSchemas.string(
    i18n('entities.assignment.fields.notes'),
  ),
});

const emptyValues = {
  person: null,
  project: null,
  hoursPerWeekRange: [],
  startDateRange: [],
  endDateRange: [],
  role: null,
  notes: null,
}

const previewRenders = {
  person: {
      label: i18n('entities.assignment.fields.person'),
      render: filterRenders.relationToOne(),
    },
  project: {
      label: i18n('entities.assignment.fields.project'),
      render: filterRenders.relationToOne(),
    },
  hoursPerWeekRange: {
    label: i18n('entities.assignment.fields.hoursPerWeekRange'),
    render: filterRenders.range(),
  },
  startDateRange: {
    label: i18n('entities.assignment.fields.startDateRange'),
    render: filterRenders.dateRange(),
  },
  endDateRange: {
    label: i18n('entities.assignment.fields.endDateRange'),
    render: filterRenders.dateRange(),
  },
  role: {
    label: i18n('entities.assignment.fields.role'),
    render: filterRenders.enumerator('entities.assignment.enumerators.role',),
  },
  notes: {
    label: i18n('entities.assignment.fields.notes'),
    render: filterRenders.generic(),
  },
}

function AssignmentListFilter(props) {
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
                        label={i18n('entities.assignment.fields.person')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <ProjectAutocompleteFormItem  
                        name="project"
                        label={i18n('entities.assignment.fields.project')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="hoursPerWeekRange"
                        label={i18n('entities.assignment.fields.hoursPerWeekRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="startDateRange"
                        label={i18n('entities.assignment.fields.startDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="endDateRange"
                        label={i18n('entities.assignment.fields.endDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="role"
                        label={i18n('entities.assignment.fields.role')}
                        options={assignmentEnumerators.role.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.assignment.enumerators.role.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="notes"
                        label={i18n('entities.assignment.fields.notes')}      
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

export default AssignmentListFilter;