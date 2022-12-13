import { useState, useEffect } from 'react'
import axios from 'axios'
import { FieldSelect, FieldInput, FieldItem } from './DashboardFields'
import alerts from '../../../services/alerts'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

const config = {
  headers: { Authorization: `Bearer ${API_KEY}` },
}

const TableRow = ({ cols, rowData, onAddChange, changes }) => {
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
                  handleChange={change =>
                    onAddChange({ ...rowData, [apiFieldName]: change })
                  }
                />
              ) : (
                <FieldInput
                  value={fieldValue || ''}
                  handleChange={change =>
                    onAddChange({ ...rowData, [apiFieldName]: change })
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

const DashboardTable = ({ tableName, columns, data, onChangeTable }) => {
  const [changes, setChanges] = useState([])

  const addOrUpdateChange = change =>
    setChanges(prev => {
      const newChange =
        tableName === 'users'
          ? { id: change.id, roleId: change.roleId }
          : tableName === 'categories' && {
              id: change.id,
              name: change.name,
              description: change.description,
            }

      const foundChangeIndex = prev.findIndex(item => item.id === change.id)

      if (foundChangeIndex !== -1) {
        const arrChanges = [...prev]
        arrChanges[foundChangeIndex] = newChange
        return arrChanges
      }

      return [...prev, newChange]
    })

  const handleEdit = async () => {
    try {
      const updates = changes.map(change =>
        axios.put(`${API_URL}/${tableName}/${change.id}`, change, {
          headers: config.headers,
        })
      )

      await Promise.all(updates)
      setChanges([])
      alerts.confirmAlert('Actualización exitosa', '')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log(changes)
  }, [changes])

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
            onChange={e => {
              onChangeTable(e.target.value)
              setChanges([])
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
          onClick={handleEdit}
        >
          Update
        </button>
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
                <TableRow
                  key={item.id}
                  cols={columns}
                  rowData={item}
                  changes={changes}
                  onAddChange={addOrUpdateChange}
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
