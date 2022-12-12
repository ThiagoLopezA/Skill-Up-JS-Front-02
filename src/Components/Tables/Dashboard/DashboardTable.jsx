import { FieldSelect, FieldInput, FieldItem } from './DashboardFields'

const TableRow = ({ cols, rowData }) => {
  return (
    <tr>
      {cols.map(field => {
        const { isEditable, options, apiFieldName, column } = field

        if (isEditable)
          return (
            <td key={column}>
              {options.length > 0 ? (
                <FieldSelect value={rowData[apiFieldName]} options={options} />
              ) : (
                <FieldInput value={rowData[apiFieldName]} />
              )}
            </td>
          )

        return <FieldItem key={column} value={rowData[apiFieldName]} />
      })}
    </tr>
  )
}

const DashboardTable = ({ tableName, columns, data, onChangeTable }) => {
  return (
    <div class="card">
      <div class="card-header d-flex gap-2 align-datas-center justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <span>
            <i class="bi bi-table me-2"></i>
          </span>
          <select
            value={tableName}
            class="form-select"
            style={{ width: 'fit-content' }}
            onChange={e => onChangeTable(e.target.value)}
          >
            <option value="users">Users table</option>
            <option value="transactions">Transactions table</option>
            <option value="categories">Categories table</option>
          </select>
        </div>
      </div>

      <div class="card-body">
        <div class="table-responsive">
          <table
            id="example"
            class="table table-striped data-table"
            style={{ width: '100%' }}
          >
            <thead>
              <tr>
                {columns.map(({ column }) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <TableRow key={item.id} cols={columns} rowData={item} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                {columns.map(({ column }) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardTable
