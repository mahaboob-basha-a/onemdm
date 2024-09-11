import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ImporterRowStatus from 'src/view/shared/importer/ImporterRowStatus';
import Pagination from 'src/view/shared/table/Pagination';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';

export default (selectors, actions, fields) => {
  function ImporterList() {
    const dispatch = useDispatch();
    const rows = useSelector(selectors.selectRows);
    const currentPageRows: Array<any> = useSelector(
      selectors.selectCurrentPageRows,
    );
    const pendingRowsCount: number = useSelector(
      selectors.selectPendingRowsCount,
    );
    const errorRowsCount: number = useSelector(
      selectors.selectErrorRowsCount,
    );
    const importedRowsCount: number = useSelector(
      selectors.selectImportedRowsCount,
    );
    const sorter: any = useSelector(selectors.selectSorter);
    const pagination: any = useSelector(
      selectors.selectPagination,
    );

    const showTotal = (total, range) => {
      return i18n(
        'importer.total',
        importedRowsCount,
        pendingRowsCount,
        errorRowsCount,
      );
    };

    const doChangeSort = (field) => {
      const order =
        sorter.field === field && sorter.order === 'ascend'
          ? 'descend'
          : 'ascend';

      dispatch(
        actions.doChangeSort(rows, {
          field,
          order,
        }),
      );
    };

    const doChangePagination = (pagination) => {
      dispatch(actions.doChangePagination(pagination));
    };

    return (
      <TableWrapper>
        <div className="table-responsive">
          <table className="table table-striped     mt-2">
            <thead className="thead">
              <tr>
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={true}
                  sorter={sorter}
                  name="_line"
                  label={i18n('importer.line')}
                />
                {fields.map((schemaItem) => (
                  <TableColumnHeader
                    key={schemaItem.name}
                    onSort={doChangeSort}
                    hasRows={true}
                    sorter={sorter}
                    name={schemaItem.name}
                    label={schemaItem.label}
                  />
                ))}
                <TableColumnHeader
                  onSort={doChangeSort}
                  hasRows={true}
                  sorter={sorter}
                  name="_status"
                  label={i18n('importer.status')}
                />
              </tr>
            </thead>
            <tbody>
              {currentPageRows.map((row) => (
                <tr key={row._line}>
                  <td>{row._line}</td>
                  {fields.map((schemaItem) => (
                    <td key={schemaItem.name}>
                      <pre
                        style={{ fontFamily: 'inherit' }}
                      >{schemaItem.render
                            ? schemaItem.render(
                                row[schemaItem.name],
                              )
                            : row[schemaItem.name] != null
                            ? String(row[schemaItem.name])
                            : null}</pre>
                    </td>
                  ))}
                  <td>
                    <ImporterRowStatus
                      value={row._status}
                      errorMessage={row._errorMessage}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          onChange={doChangePagination}
          pagination={pagination}
          showTotal={showTotal}
        />
      </TableWrapper>
    );
  }

  return ImporterList;
};
