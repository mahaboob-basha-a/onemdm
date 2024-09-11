import { i18n } from 'src/i18n';
import React from 'react';

function UserStatusView(props) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value === 'active') {
    return (
      <span className={`badge badge-success`}>
        {i18n('user.status.active')}
      </span>
    );
  }

  if (value === 'empty-permissions') {
    return (
      <span className={`badge badge-danger`}>
        {i18n('user.status.empty-permissions')}
      </span>
    );
  }

  return (
    <span className={`badge badge-warning`}>
      {i18n('user.status.invited')}
    </span>
  );
}

export default UserStatusView;
