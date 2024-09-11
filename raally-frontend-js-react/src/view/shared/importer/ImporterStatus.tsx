import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'src/i18n';

export default (selectors) => {
  function ImporterStatus() {
    const completed = useSelector(
      selectors.selectCompleted,
    );
    const importing = useSelector(
      selectors.selectImporting,
    );
    const nonPendingRowsCount = useSelector(
      selectors.selectNonPendingRowsCount,
    );
    const rowsCount = useSelector(
      selectors.selectRowsCount,
    );
    const percent = useSelector(selectors.selectPercent);
    const errorRowsCount = useSelector(
      selectors.selectErrorRowsCount,
    );

    const renderCompleted = () => {
      return (
        <div className="alert alert-success">
          {i18n('importer.completed.success')}
        </div>
      );
    };

    const renderCompletedSomeErrors = () => {
      return (
        <div className="alert alert-warning">
          {i18n('importer.completed.someErrors')}
        </div>
      );
    };

    const renderCompletedAllErrors = () => {
      return (
        <div className="alert alert-danger">
          {i18n('importer.completed.allErrors')}
        </div>
      );
    };

    const renderProcessing = () => {
      return (
        <>
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: `${percent}%` }}
            ></div>
          </div>
          <p>
            {i18n(
              'importer.importedMessage',
              nonPendingRowsCount,
              rowsCount,
            )}{' '}
            {i18n('importer.noNavigateAwayMessage')}
          </p>
        </>
      );
    };

    const renderBody = () => {
      const isAllErrors = errorRowsCount === rowsCount;

      if (completed && isAllErrors) {
        return renderCompletedAllErrors();
      }

      const isSomeErrors = Boolean(errorRowsCount);

      if (completed && isSomeErrors) {
        return renderCompletedSomeErrors();
      }

      const allSuccess = !errorRowsCount;

      if (completed && allSuccess) {
        return renderCompleted();
      }

      return renderProcessing();
    };

    if (!importing && !completed) {
      return null;
    }

    return renderBody();
  }

  return ImporterStatus;
};
