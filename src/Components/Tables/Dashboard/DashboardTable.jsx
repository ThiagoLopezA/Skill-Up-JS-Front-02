import DashboardTableRow from './DashboardTableRow'

const DashboardTable = ({
  tableName,
  columns,
  data,
  changes,
  onChangeTable,
  onEdit,
  onUpdate,
}) => {
  return (
    <div className="card">
      <div className="card-header d-flex gap-2 align-datas-center justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <span>
            <i className="bi bi-table me-2"></i>
          </span>
          <select
            value={tableName}
            className="form-select"
            style={{ width: 'fit-content' }}
            onChange={e => {
              onChangeTable(e.target.value)
            }}
          >
            <option value="users">Users table</option>
            <option value="transactions">Transactions table</option>
            <option value="categories">Categories table</option>
          </select>
        </div>
        <button
          className="btn btn-warning btn-lg"
          disabled={changes.length === 0}
          onClick={onUpdate}
        >
          Update
        </button>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table
            id="example"
            className="table table-striped data-table"
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
                <DashboardTableRow
                  key={item.id}
                  cols={columns}
                  rowData={item}
                  changes={changes}
                  onEdit={onEdit}
                />
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
