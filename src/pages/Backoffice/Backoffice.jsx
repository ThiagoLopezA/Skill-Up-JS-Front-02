import { useEffect } from 'react'
import { useState } from 'react'
import DashboardTableContainer from '../../Components/Tables/Dashboard/DashboardTableContainer'

const TotalCard = ({ title, total, style }) => {
  return (
    <article
      className={`card text-white text-center`}
      style={{
        maxWidth: 300,
        width: '100%',
        height: 200,
        backgroundColor: style.bg,
      }}
    >
      <div className="card-body d-flex flex-column justify-content-center">
        <h3 className="card-title fs-2">{title}</h3>
        <p className="card-text fs-4">{total}</p>
      </div>
    </article>
  )
}

const Backoffice = ({ users, transactions, categories, loadData }) => {
  const [table, setTable] = useState({ name: 'users', data: [] })

  const setTableTo = {
    users: () => setTable({ name: 'users', data: users }),
    transactions: () => setTable({ name: 'transactions', data: transactions }),
    categories: () => setTable({ name: 'categories', data: categories }),
  }

  useEffect(() => {
    setTableTo.users()
  }, [users])

  return (
    <div className="container py-5">
      <h1 style={{ color: '#3a3a3a' }}>Backoffice</h1>

      <div className="mt-5 d-flex justify-content-between gap-2">
        <TotalCard
          title="Users"
          total={users.length}
          style={{ bg: '#3564fd' }}
        />
        <TotalCard
          title="Transactions"
          total={transactions.length}
          style={{ bg: '#3a3a3a' }}
        />
        <TotalCard
          title="Categories"
          total={categories.length}
          style={{ bg: '#3564fd' }}
        />
      </div>

      <div class="row py-5">
        <div class="col-md-12 mb-3">
          <DashboardTableContainer
            tableName={table.name}
            data={table.data}
            setTableTo={setTableTo}
            loadData={loadData}
          />
        </div>
      </div>
    </div>
  )
}

export default Backoffice
