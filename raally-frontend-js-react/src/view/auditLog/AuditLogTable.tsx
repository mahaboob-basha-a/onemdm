import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auditLog/auditLogActions';
import selectors from 'src/modules/auditLog/auditLogSelectors';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import moment from 'moment';

function AuditLogTable(props) {
  const dispatch = useDispatch();

  const doOpenSelectdValues = (values) => {
    const data = JSON.stringify(values, null, 2);
    const jsonWindow = window.open(
      '',
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400',
    );
    (jsonWindow as any).document.write(
      `<pre>${data}</pre>`,
    );
  };

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

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'timestamp'}
                label={i18n('auditLog.fields.timestamp')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'createdByEmail'}
                label={i18n(
                  'auditLog.fields.createdByEmail',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'entityName'}
                label={i18n('auditLog.fields.entityName')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'action'}
                label={i18n('auditLog.fields.action')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'entityId'}
                label={i18n('auditLog.fields.entityId')}
              />
              <TableColumnHeader className="th-actions-sm" />
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
                    {moment(row.timestamp).format(
                      'YYYY-MM-DD HH:mm',
                    )}
                  </td>
                  <td>{row.createdByEmail}</td>
                  <td>{row.entityName}</td>
                  <td>{row.action}</td>
                  <td>{row.entityId}</td>
                  <td>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() =>
                        doOpenSelectdValues(row.values)
                      }
                    >
                      {i18n('common.view')}
                    </button>
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
    </TableWrapper>
  );
}

export default AuditLogTable;
