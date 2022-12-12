import DashboardTable from './DashboardTable'

const userFields = {
  ID: 'id',
  'First name': 'firstName',
  'Last name': 'lastName',
  Email: 'email',
  Avatar: 'avatar',
  'Role ID': 'roleId',
  'Created At': 'createdAt',
  'Updated At': 'updatedAt',
}

const transactionFields = {
  ID: 'id',
  Description: 'description',
  Amount: 'amount',
  'User ID': 'userId',
  Category: 'categoryId',
  Date: 'date',
}

const categorieFields = {
  ID: 'id',
  Name: 'name',
  Description: 'description',
}

const config = {
  users: {
    title: 'Users',
    fields: userFields,
  },
  categories: {
    title: 'Categories',
    fields: categorieFields,
  },
  transactions: {
    title: 'Transactions',
    fields: transactionFields,
  },
}

const DashboardTableContainer = ({ name, data }) => {
  return (
    <DashboardTable
      title={config[name].title}
      fields={config[name].fields}
      data={data}
    />
  )
}

export default DashboardTableContainer
