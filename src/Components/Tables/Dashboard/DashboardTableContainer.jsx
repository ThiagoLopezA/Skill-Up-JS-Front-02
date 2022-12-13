import { useEffect } from 'react'
import { useState } from 'react'
import DashboardTable from './DashboardTable'

const userFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'First name', apiFieldName: 'firstName' },
  { column: 'Last name', apiFieldName: 'lastName' },
  { column: 'Email', apiFieldName: 'email' },
  { column: 'Avatar', apiFieldName: 'avatar' },
  { column: 'Created At', apiFieldName: 'createdAt' },
  { column: 'Updated At', apiFieldName: 'updatedAt' },
  {
    column: 'Role',
    apiFieldName: 'roleId',
    isEditable: true,
    options: [1, 2, 3],
  },
]

const transactionFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'Description', apiFieldName: 'description' },
  { column: 'Amount', apiFieldName: 'amount' },
  { column: 'User ID', apiFieldName: 'userId' },
  { column: 'Category', apiFieldName: 'categoryId' },
  { column: 'Date', apiFieldName: 'date' },
]

const categorieFields = [
  { column: 'ID', apiFieldName: 'id' },
  { column: 'Name', apiFieldName: 'name' },
  {
    column: 'Description',
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
const DashboardTableContainer = ({ tableName, data, setTableTo }) => {
  const [option, setOption] = useState(tableName)

  const handleOption = op => setOption(op)

  useEffect(() => {
    setTableTo[option]()
  }, [option])

  return (
    <DashboardTable
      tableName={option}
      columns={fields[tableName]}
      data={data}
      onChangeTable={handleOption}
    />
  )
}

export default DashboardTableContainer