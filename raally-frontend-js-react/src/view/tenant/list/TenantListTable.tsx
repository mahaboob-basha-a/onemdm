import { i18n } from 'src/i18n';
import destroyActions from 'src/modules/tenant/destroy/tenantDestroyActions';
import destroySelectors from 'src/modules/tenant/destroy/tenantDestroySelectors';
import invitationSelectors from 'src/modules/tenant/invitation/tenantInvitationSelectors';
import actions from 'src/modules/tenant/list/tenantListActions';
import selectors from 'src/modules/tenant/list/tenantListSelectors';
import tenantSelectors from 'src/modules/tenant/tenantSelectors';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import Pagination from 'src/view/shared/table/Pagination';
import authActions from 'src/modules/auth/authActions';
import invitationActions from 'src/modules/tenant/invitation/tenantInvitationActions';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import authSelectors from 'src/modules/auth/authSelectors';
import Plans from 'src/security/plans';
import config from 'src/config';
import { tenantSubdomain } from 'src/modules/tenant/tenantSubdomain';

function TenantListTable() {
  const dispatch = useDispatch();

  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);

  const [
    invitationTokenToDeclineInvitation,
    setInvitationTokenToDeclineInvitation,
  ] = useState(null);

  const listLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const invitationLoading = useSelector(
    invitationSelectors.selectLoading,
  );

  const loading =
    listLoading || destroyLoading || invitationLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const hasPermissionToEdit = useSelector(
    tenantSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    tenantSelectors.selectPermissionToDestroy,
  );
  const invitationToken = useSelector(
    tenantSelectors.selectInvitationToken,
  );

  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doSelectTenant = (tenant) => {
    dispatch(authActions.doSelectTenant(tenant));
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    setRecordIdToDestroy(null);
    dispatch(destroyActions.doDestroy(id));
  };

  const doDeclineInvitation = (token) => {
    setInvitationTokenToDeclineInvitation(null);
    dispatch(invitationActions.doDecline(token));
  };

  const doAcceptInvitation = (token) => {
    dispatch(invitationActions.doAccept(token));
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'name'}
                label={i18n('tenant.fields.name')}
              />
              {tenantSubdomain.isEnabled && (
                <TableColumnHeader
                  label={i18n('tenant.fields.url')}
                />
              )}
              {config.isPlanEnabled && (
                <TableColumnHeader
                  label={i18n('tenant.fields.plan')}
                />
              )}
              <TableColumnHeader className="th-actions" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    {row.name}
                    {Boolean(invitationToken(row)) && (
                      <span
                        style={{ marginLeft: '8px' }}
                        className={`badge badge-warning`}
                      >
                        {i18n('tenant.invitation.invited')}
                      </span>
                    )}
                  </td>
                  {tenantSubdomain.isEnabled && (
                    <td>{`${row.url}.${config.frontendUrl.host}`}</td>
                  )}
                  {config.isPlanEnabled && (
                    <td>
                      <span
                        className={`badge ${
                          row.plan === Plans.values.free
                            ? 'badge-secondary'
                            : 'badge-warning'
                        }`}
                      >
                        {i18n(`plan.${row.plan}.label`)}
                      </span>
                    </td>
                  )}
                  <td className="td-actions">
                    {Boolean(invitationToken(row)) ? (
                      <>
                        <button
                          className="btn btn-success"
                          style={{ marginRight: '8px' }}
                          onClick={() =>
                            doAcceptInvitation(
                              invitationToken(row),
                            )
                          }
                        >
                          {i18n('tenant.invitation.accept')}
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            setInvitationTokenToDeclineInvitation(
                              invitationToken(row),
                            )
                          }
                        >
                          {i18n(
                            'tenant.invitation.decline',
                          )}
                        </button>
                      </>
                    ) : (
                      <>
                        {currentTenant.id !== row.id && (
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              doSelectTenant(row)
                            }
                            style={{ marginRight: '8px' }}
                          >
                            {i18n('tenant.select')}
                          </button>
                        )}
                        {hasPermissionToEdit(row) && (
                          <Link
                            className="btn btn-link"
                            to={`/tenant/${row.id}/edit`}
                          >
                            {i18n('common.edit')}
                          </Link>
                        )}
                        {hasPermissionToDestroy(row) && (
                          <button
                            className="btn btn-link"
                            type="button"
                            onClick={() =>
                              setRecordIdToDestroy(row.id)
                            }
                          >
                            {i18n('common.destroy')}
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {invitationTokenToDeclineInvitation && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() =>
            doDeclineInvitation(
              invitationTokenToDeclineInvitation,
            )
          }
          onClose={() =>
            setInvitationTokenToDeclineInvitation(null)
          }
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => setRecordIdToDestroy(null)}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default TenantListTable;
