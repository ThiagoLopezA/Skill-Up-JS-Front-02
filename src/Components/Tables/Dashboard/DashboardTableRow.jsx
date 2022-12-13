import { format, parseISO } from 'date-fns'
import { FieldSelect, FieldInput, FieldItem } from './DashboardFields'

const DashboardTableRow = ({ cols, rowData, onEdit, changes }) => {
  return (
    <tr>
      {cols.map(field => {
        const { isEditable, options, apiFieldName, column, isDate } = field
        const value = rowData[apiFieldName]

        if (isEditable) {
          const foundField = changes.find(change => change.id === rowData['id'])
          const fieldValue = foundField ? foundField[apiFieldName] : value

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

        return (
          <FieldItem
            key={column}
            value={isDate ? format(parseISO(value), 'dd/MM/yyyy') : value}
          />
        )
      })}
    </tr>
  )
}

export default DashboardTableRow
