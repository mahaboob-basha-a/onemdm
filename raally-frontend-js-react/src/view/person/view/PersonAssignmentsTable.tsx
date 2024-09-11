import React from 'react';
import { i18n } from 'src/i18n';
import TableColumnHeader from 'src/view/shared/table/TableColumnHeader';
// import Spinner from 'src/view/shared/Spinner';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ProjectListItem from 'src/view/project/list/ProjectListItem';

function PersonAssignmentsTable(props) {
  const { assignments } = props;
  const hasRows = assignments.count > 0;

  return (
    <TableWrapper>
      <label className="col-form-label">
        {props.label}
      </label>
      <div className="table-responsive">
        <table className="table table-striped     mt-2">
          <thead className="thead">
            <tr>
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.project',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.hoursPerWeek',
                  )}
                  align="right"
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.startDate',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.role',
                  )}
                />
                <TableColumnHeader
                  label={i18n(
                    'entities.assignment.fields.notes',
                  )}
                />
            </tr>
          </thead>
          <tbody>
            {!hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="d-flex justify-content-center">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {hasRows &&
              assignments.rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <ProjectListItem value={row.project} />
                  </td>
                  <td style={{ textAlign: 'right' }}>{row.hoursPerWeek}</td>
                  <td>{row.startDate}</td>
                  <td>
                    {row.role
                      ? i18n(
                          `entities.assignment.enumerators.role.${row.role}`,
                        )
                      : null}
                  </td>
                  <td>{row.notes}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </TableWrapper>
  );
}

export default PersonAssignmentsTable;
