import { FieldSelect, FieldInput, FieldItem } from './DashboardFields'

const DashboardTableRow = ({ cols, rowData, onEdit, changes }) => {
  return (
    <tr>
      {cols.map(field => {
        const { isEditable, options, apiFieldName, column } = field

        if (isEditable) {
          const foundField = changes.find(change => change.id === rowData['id'])
          const fieldValue = foundField
            ? foundField[apiFieldName]
            : rowData[apiFieldName]

          return (
            <td key={column}>
              {options.length > 0 ? (
                <FieldSelect
                  options={options}
                  value={fieldValue || options[0]}
                  onChange={change =>
                    onEdit({ ...rowData, [apiFieldName]: change })
                  }
                />
              ) : (
                <FieldInput
                  value={fieldValue || ''}
                  onChange={change =>
                    onEdit({ ...rowData, [apiFieldName]: change })
                  }
                />
              )}
            </td>
          )
        }

        return <FieldItem key={column} value={rowData[apiFieldName]} />
      })}
    </tr>
  )
}

export default DashboardTableRow
