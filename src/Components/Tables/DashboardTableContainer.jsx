import DashboardTable from './DashboardTable'

const usersFields = {
  ID: 'id',
  'First name': 'firstName',
  'Last name': 'lastName',
  Email: 'email',
  Avatar: 'avatar',
  'Role ID': 'roleId',
  'Created At': 'createdAt',
  'Updated At': 'updatedAt',
}

const transactionsFields = {
  ID: 'id',
  Description: 'description',
  Amount: 'amount',
  'User ID': 'userId',
  Category: 'categoryId',
  Date: 'date',
}

const categoriesFields = {
  ID: 'id',
  Name: 'name',
  Description: 'description',
}

// name = 'users' | 'transactions' | 'categories'
const DashboardTableContainer = ({ name, data }) => {
  if (name === 'users')
    return <DashboardTable title="Users" fields={usersFields} data={data} />

  if (name === 'transactions')
    return (
      <DashboardTable
        title="Transactions"
        fields={transactionsFields}
        data={data}
      />
    )

  if (name === 'categories')
    return (
      <DashboardTable
        title="Categories"
        fields={categoriesFields}
        data={data}
      />
    )

  return <h2>No data</h2>
}

export default DashboardTableContainer
