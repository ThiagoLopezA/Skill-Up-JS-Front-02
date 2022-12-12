const TableRow = ({ apiFields, rowData }) => (
  <tr>
    {apiFields.map(key => (
      <td key={key}>{rowData[key]}</td>
    ))}
  </tr>
)

const DashboardTable = ({ tableName, columns, data, onChangeOption }) => {
  const cols = columns.map(field => field.column)
  const apiFields = columns.map(field => field.apiFieldName)

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
            onChange={onChangeOption}
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
                {cols.map(column => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <TableRow key={item.id} apiFields={apiFields} rowData={item} />
              ))}
            </tbody>
            <tfoot>
              <tr>
                {cols.map(column => (
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
