const TableRow = ({ fields, item }) => (
  <tr>
    {fields.map(field => (
      <td key={field}>{item[field]}</td>
    ))}
  </tr>
)

const DashboardTable = ({ title, fields, data }) => {
  const fieldsHeaders = Object.keys(fields)
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
                {fieldsHeaders.length > 0 &&
                  fieldsHeaders.map(field => <th key={field}>{field}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map(item => (
                  <TableRow key={item.id} fields={fieldsValues} item={item} />
                ))}
            </tbody>
            <tfoot>
              <tr>
                {fieldsHeaders.length > 0 &&
                  fieldsHeaders.map(field => <th key={field}>{field}</th>)}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DashboardTable
