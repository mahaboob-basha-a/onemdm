import {
  EXCEL_EXTENSION,
  EXCEL_TYPE,
} from 'src/modules/shared/excel/excel';
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import FormWrapper from 'src/view/shared/styles/FormWrapper';

export default (selectors, actions) => {
  function ImporterForm() {
    const dispatch = useDispatch();

    const errorMessage: string = useSelector(
      selectors.selectErrorMessage,
    );

    const input = useRef(null);

    const handleChange = (event) => {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      dispatch(actions.doReadFile(file));
    };

    return (
      <FormWrapper style={{ paddingLeft: 0 }}>
        <label
          className="btn btn-primary px-4 mb-2"
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-plus" />{' '}
          {i18n('fileUploader.upload')}
          <input
            style={{ display: 'none' }}
            accept={`${EXCEL_TYPE}, ${EXCEL_EXTENSION}`}
            type="file"
            onChange={handleChange}
            ref={input}
          />
        </label>
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      </FormWrapper>
    );
  }

  return ImporterForm;
};
