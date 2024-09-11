import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/user/list/userListActions';
import selectors from 'src/modules/user/list/userListSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';

function UserToolbar(props) {
  const dispatch = useDispatch();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToCreate = useSelector(
    userSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    userSelectors.selectPermissionToImport,
  );
  const hasPermissionToDestroy = useSelector(
    userSelectors.selectPermissionToDestroy,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const loading = useSelector(selectors.selectLoading);
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(actions.doDestroyAllSelected());
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <button
        className="btn btn-light"
        type="button"
        disabled={disabled}
        onClick={doExport}
      >
        <ButtonIcon
          loading={exportLoading}
          iconClass="far fa-file-excel"
        />{' '}
        {i18n('common.export')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="user-users-toolbar-export-tooltip"
        >
          {button}
          <ReactTooltip id="user-users-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled}
        className="btn btn-primary"
        type="button"
        onClick={doDestroyAllSelected}
      >
        <ButtonIcon iconClass="fas fa-user-minus" />{' '}
        {i18n('common.destroy')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="user-users-toolbar-destroy-all-tooltip"
        >
          {button}
          <ReactTooltip id="user-users-toolbar-destroy-all-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/user/new">
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-user-plus" />{' '}
            {i18n('common.new')}
          </button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/user/importer">
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-upload" />{' '}
            {i18n('common.import')}
          </button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=user">
          <button className="btn btn-light" type="button">
            <ButtonIcon iconClass="fas fa-history" />{' '}
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
}

export default UserToolbar;
