import React from 'react';
import PropTypes from 'prop-types';
import { i18n } from 'src/i18n';
import statuses from 'src/modules/shared/importer/importerStatuses';
import ImporterErrorStatusMessage from 'src/view/shared/importer/styles/ImporterErrorStatusMessage';

function ImporterRowStatus(props) {
  const { value, errorMessage } = props;

  if (value === statuses.PENDING) {
    return (
      <span className="badge badge-secondary">
        {i18n('importer.pending')}
      </span>
    );
  }

  if (value === statuses.IMPORTED) {
    return (
      <span className="badge badge-success">
        {i18n('importer.imported')}
      </span>
    );
  }

  if (value === statuses.ERROR) {
    return (
      <>
        <span className="badge badge-danger">
          {i18n('importer.error')}
        </span>{' '}
        <ImporterErrorStatusMessage>
          {errorMessage}
        </ImporterErrorStatusMessage>
      </>
    );
  }

  return null;
}

ImporterRowStatus.propTypes = {
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default ImporterRowStatus;
