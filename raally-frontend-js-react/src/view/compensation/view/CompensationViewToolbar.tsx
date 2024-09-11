import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import compensationSelectors from 'src/modules/compensation/compensationSelectors';
import destroyActions from 'src/modules/compensation/destroy/compensationDestroyActions';
import destroySelectors from 'src/modules/compensation/destroy/compensationDestroySelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Toolbar from 'src/view/shared/styles/Toolbar';
import ButtonIcon from 'src/view/shared/ButtonIcon';

function CompensationViewToolbar(props) {
  const [
    destroyConfirmVisible,
    setDestroyConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const id = props.match.params.id;

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToEdit = useSelector(
    compensationSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    compensationSelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const doOpenDestroyConfirmModal = () => {
    setDestroyConfirmVisible(true);
  };

  const doCloseDestroyConfirmModal = () => {
    setDestroyConfirmVisible(false);
  };

  const doDestroy = () => {
    doCloseDestroyConfirmModal();
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/compensation/${id}/edit`}>
          <button className="btn btn-primary" type="button">
            <ButtonIcon iconClass="fas fa-edit" />{' '}
            {i18n('common.edit')}
          </button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <button
          className="btn btn-primary"
          type="button"
          disabled={destroyLoading}
          onClick={doOpenDestroyConfirmModal}
        >
          <ButtonIcon
            loading={destroyLoading}
            iconClass="fas fa-trash-alt"
          />{' '}
          {i18n('common.destroy')}
        </button>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <button className="btn btn-light" type="button">
            <ButtonIcon iconClass="fas fa-history" />{' '}
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}

      {destroyConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy()}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </Toolbar>
  );
}

export default CompensationViewToolbar;
