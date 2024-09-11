import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import assignmentSelectors from 'src/modules/assignment/assignmentSelectors';
import destroyActions from 'src/modules/assignment/destroy/assignmentDestroyActions';
import destroySelectors from 'src/modules/assignment/destroy/assignmentDestroySelectors';
import actions from 'src/modules/assignment/list/assignmentListActions';
import selectors from 'src/modules/assignment/list/assignmentListSelectors';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import Pagination from 'src/view/shared/table/Pagination';
import PersonListItem from 'src/view/person/list/PersonListItem';
import ProjectListItem from 'src/view/project/list/ProjectListItem';

function AssignmentListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    assignmentSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    assignmentSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
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

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <TableWrapper>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
              <TableColumnHeader className="th-checkbox">
                {hasRows && (
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="table-header-checkbox"
                      checked={Boolean(isAllSelected)}
                      onChange={() => doToggleAllSelected()}
                    />
                    <label
                      htmlFor="table-header-checkbox"
                      className="custom-control-label"
                    >
                      &#160;
                    </label>
                  </div>
                )}
              </TableColumnHeader>
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.person',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.project',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'hoursPerWeek'}
                  label={i18n(
                    'entities.assignment.fields.hoursPerWeek',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'startDate'}
                  label={i18n(
                    'entities.assignment.fields.startDate',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'endDate'}
                  label={i18n(
                    'entities.assignment.fields.endDate',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'role'}
                  label={i18n(
                    'entities.assignment.fields.role',
                  )}
                />
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={hasRows}
                  sorter={sorter}
                  name={'notes'}
                  label={i18n(
                    'entities.assignment.fields.notes',
                  )}
                />
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
                  <th className="th-checkbox" scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={`table-header-checkbox-${row.id}`}
                        checked={selectedKeys.includes(
                          row.id,
                        )}
                        onChange={() =>
                          doToggleOneSelected(row.id)
                        }
                      />
                      <label
                        htmlFor={`table-header-checkbox-${row.id}`}
                        className="custom-control-label"
                      >
                        &#160;
                      </label>
                    </div>
                  </th>
                  <td>
                    <PersonListItem value={row.person} />
                  </td>
                  <td>
                    <ProjectListItem value={row.project} />
                  </td>
                  <td style={{ textAlign: 'right' }}>{row.hoursPerWeek}</td>
                  <td>{row.startDate}</td>
                  <td>{row.endDate}</td>
                  <td>
                    {row.role
                      ? i18n(
                          `entities.assignment.enumerators.role.${row.role}`,
                        )
                      : null}
                  </td>
                  <td>{row.notes}</td>
                  <td className="td-actions">
                    <Link
                      className="btn btn-link"
                      to={`/assignment/${row.id}`}
                    >
                      {i18n('common.view')}
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="btn btn-link"
                        to={`/assignment/${row.id}/edit`}
                      >
                        {i18n('common.edit')}
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="btn btn-link"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                      >
                        {i18n('common.destroy')}
                      </button>
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

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </TableWrapper>
  );
}

export default AssignmentListTable;
