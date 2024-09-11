import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import ReactTooltip from 'react-tooltip';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';

export default (
  selectors,
  actions,
  fields,
  templateHelp,
) => {
  function ImporterToolbar() {
    const dispatch = useDispatch();
    const [
      resetConfirmVisible,
      setResetConfirmVisible,
    ] = useState(false);
    const [
      discardConfirmVisible,
      setDiscardConfirmVisible,
    ] = useState(false);

    const hasRows = useSelector(selectors.selectHasRows);
    const importing = useSelector(
      selectors.selectImporting,
    );
    const completed = useSelector(
      selectors.selectCompleted,
    );

    const doOpenResetConfirmModal = () => {
      setResetConfirmVisible(true);
    };

    const doCloseResetConfirmModal = () => {
      setResetConfirmVisible(false);
    };

    const doOpenDiscardConfirmModal = () => {
      setDiscardConfirmVisible(true);
    };

    const doCloseDiscardConfirmModal = () => {
      setDiscardConfirmVisible(false);
    };

    const doReset = () => {
      doCloseDiscardConfirmModal();
      doCloseResetConfirmModal();
      dispatch(actions.doReset());
    };

    const doPause = () => {
      dispatch(actions.doPause());
    };

    const doImport = () => {
      dispatch(actions.doImport());
    };

    const doDownloadTemplate = () => {
      dispatch(actions.doDownloadTemplate());
    };

    const showDownloadTemplate = !hasRows;
    const showImport = hasRows && !importing && !completed;
    const showDiscard = hasRows && !importing && !completed;
    const showNew = Boolean(completed);
    const showPause = hasRows && importing;

    return (
      <Toolbar>
        {showDownloadTemplate && (
          <>
            <button
              className="btn btn-light"
              type="button"
              onClick={doDownloadTemplate}
            >
              <ButtonIcon iconClass="far fa-file-excel" />{' '}
              {i18n('importer.form.downloadTemplate')}
            </button>

            {templateHelp && (
              <span
                data-tip={templateHelp}
                data-for="importer-toolbar-help-tooltip"
                data-html={true}
              >
                <i
                  style={{ fontSize: '18px' }}
                  className="fas fa-info-circle"
                />
                <ReactTooltip id="importer-toolbar-help-tooltip" />
              </span>
            )}
          </>
        )}

        {showImport && (
          <button
            onClick={doImport}
            className="btn btn-primary"
            type="button"
          >
            <ButtonIcon iconClass="far fa-save" />{' '}
            {i18n('common.import')}
          </button>
        )}

        {showPause && (
          <button
            type="button"
            className="btn btn-light"
            onClick={doPause}
          >
            <ButtonIcon classIcon="fas fa-pause" />{' '}
            {i18n('common.pause')}
          </button>
        )}

        {showNew && (
          <button
            className="btn btn-light"
            type="button"
            onClick={doOpenResetConfirmModal}
          >
            <ButtonIcon iconClass="far fa-file" />{' '}
            {i18n('common.new')}
          </button>
        )}

        {showDiscard && (
          <button
            type="button"
            className="btn btn-light"
            onClick={doOpenDiscardConfirmModal}
          >
            <ButtonIcon iconClass="far fa-trash-alt" />{' '}
            {i18n('common.discard')}
          </button>
        )}

        {discardConfirmVisible && (
          <ConfirmModal
            title={i18n('importer.list.discardConfirm')}
            onConfirm={() => doReset()}
            onClose={() => doCloseDiscardConfirmModal()}
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}

        {resetConfirmVisible && (
          <ConfirmModal
            title={i18n('common.areYouSure')}
            onConfirm={() => doReset()}
            onClose={() => doCloseResetConfirmModal()}
            okText={i18n('common.yes')}
            cancelText={i18n('common.no')}
          />
        )}
      </Toolbar>
    );
  }

  return ImporterToolbar;
};
