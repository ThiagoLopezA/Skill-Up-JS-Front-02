const TableRow = ({ fields, item }) => (
  <tr>
    {fields.map(field => (
      <td>{item[field]}</td>
    ))}
  </tr>
)

const DashboardTable = ({ title, fields, data }) => {
  console.log(data)

  const fieldsKeys = Object.keys(fields)
  const fieldsValues = Object.values(fields)

  return (
    <div class="card">
      <div class="card-header">
        <span>
          <i class="bi bi-table me-2"></i>
        </span>
        {title} table
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
                {fieldsKeys.length > 0 &&
                  fieldsKeys.map(field => <th key={field}>{field}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map(item => (
                  <TableRow item={item} fields={fieldsValues} />
                ))}
            </tbody>
            <tfoot>
              <tr>
                {fieldsKeys.length > 0 &&
                  fieldsKeys.map(field => <th key={field}>{field}</th>)}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      {/* <UsersTable users={users} /> */}
    </div>
  )
}

export default DashboardTable
