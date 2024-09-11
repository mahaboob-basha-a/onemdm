import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';

function SettingsFormToolbar(props) {
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );

  return (
    <Toolbar style={{ marginBottom: '16px' }}>
      {hasPermissionToAuditLogs && (
        <Link to={`/audit-logs?entityNames=settings`}>
          <button className="btn btn-light" type="button">
            <ButtonIcon iconClass="fas fa-history" />{' '}
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}
    </Toolbar>
  );
}

export default SettingsFormToolbar;
