import React from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import Toolbar from 'src/view/shared/styles/Toolbar';

function TenantToolbar(props) {
  return (
    <Toolbar style={{ marginBottom: '8px' }}>
      <Link to="/tenant/new">
        <button className="btn btn-primary" type="button">
          <ButtonIcon iconClass="fas fa-plus" />{' '}
          {i18n('common.new')}
        </button>
      </Link>
    </Toolbar>
  );
}

export default TenantToolbar;
