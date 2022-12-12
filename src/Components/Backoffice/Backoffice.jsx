import DashboardTableContainer from '../Tables/DashboardTableContainer'

const Backoffice = ({ users, transactions, categories }) => {
  const totalUsers = users.length
  const totalTransactions = transactions.length
  const totalCategories = categories.length

  return (
    <div className="container py-5">
      <h1>Backoffice</h1>

      <div className="mt-5 d-flex justify-content-between">
        <article
          className="card bg-primary text-white text-center"
          style={{ maxWidth: 300, width: '100%', height: 200 }}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title">Total users</h3>
            <p className="card-text">{totalUsers}</p>
          </div>
        </article>
        <article
          className="card bg-warning text-white text-center"
          style={{ maxWidth: 300, width: '100%', height: 200 }}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title">Total transactions</h3>
            <p className="card-text">{totalTransactions}</p>
          </div>
        </article>
        <article
          className="card bg-info text-white text-center"
          style={{ maxWidth: 300, width: '100%', height: 200 }}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title">Categories</h3>
            <p className="card-text">{totalCategories}</p>
          </div>
        </article>
      </div>

      <div class="row py-5">
        <div class="col-md-12 mb-3">
          <DashboardTableContainer name="categories" data={categories} />
        </div>
      </div>
    </div>
  )
}

export default Backoffice
