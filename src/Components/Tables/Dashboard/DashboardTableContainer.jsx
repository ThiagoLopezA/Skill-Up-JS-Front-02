import { useEffect } from 'react'
import { useState } from 'react'

import DashboardTable from './DashboardTable'
import alerts from '../../../services/alerts'
import { putRequest } from '../../../services/httpRequest'

const userFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'Nombre', apiFieldName: 'firstName' },
  { column: 'Apellido', apiFieldName: 'lastName' },
  { column: 'Email', apiFieldName: 'email' },
  { column: 'Avatar', apiFieldName: 'avatar' },
  { column: 'Creado', apiFieldName: 'createdAt', isDate: true },
  { column: 'Última actualización', apiFieldName: 'updatedAt', isDate: true },
  {
    column: 'Rol',
    apiFieldName: 'roleId',
    isEditable: true,
    options: [1, 2, 3],
  },
]

const transactionFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'Descripción', apiFieldName: 'description' },
  { column: 'Monto', apiFieldName: 'amount' },
  { column: 'Del usuario', apiFieldName: 'userId' },
  { column: 'Para usuario', apiFieldName: 'toUserId' },
  { column: 'Categoría', apiFieldName: 'categoryId' },
  { column: 'Fecha', apiFieldName: 'date', isDate: true },
]

const categorieFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'Nombre', apiFieldName: 'name' },
  {
    column: 'Descripción',
    apiFieldName: 'description',
    isEditable: true,
    options: [],
  },
]

const fields = {
  users: userFields,
  categories: categorieFields,
  transactions: transactionFields,
}

// tableName = users | transactions | categories
const DashboardTableContainer = ({ tableName, data, setTableTo, loadData }) => {
  const [currentTable, setCurrentTable] = useState(tableName)
  const [changes, setChanges] = useState([])

  const resetChanges = () => setChanges([])

  const handleTable = option => {
    setCurrentTable(option)
    resetChanges()
  }

  const handleUpdate = async () => {
    try {
      const updates = changes.map(change =>
        putRequest(`/${tableName}/${change.id}`, change)
      )

      await Promise.all(updates)
      alerts.confirmAlert('Actualización exitosa', '')

      await loadData()
      resetChanges()
    } catch (err) {
      console.log(err)
    }
  }

  const handleEdit = change => {
    const userChange = { id: change.id, roleId: change.roleId }
    const categorieChange = {
      id: change.id,
      name: change.name,
      description: change.description,
    }

    const newChange = tableName === 'users' ? userChange : categorieChange

    setChanges(prevChanges => {
      const index = prevChanges.findIndex(item => item.id === change.id)

      if (index !== -1) {
        const arr = [...prevChanges]
        arr[index] = newChange
        return arr
      }

      return [...prevChanges, newChange]
    })
  }

  useEffect(() => {
    setTableTo[currentTable]()
  }, [currentTable])

  useEffect(() => {
    setCurrentTable(tableName)
  }, [tableName])

  return (
    <DashboardTable
      tableName={currentTable}
      columns={fields[tableName]}
      data={data}
      changes={changes}
      onChangeTable={handleTable}
      onEdit={handleEdit}
      onUpdate={handleUpdate}
    />
  )
}

export default DashboardTableContainer
