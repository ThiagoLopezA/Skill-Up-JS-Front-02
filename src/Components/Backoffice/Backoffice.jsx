const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.avatar}</td>
      <td>{user.roleId}</td>
      <td>{user.createdAt}</td>
      <td>{user.updatedAt}</td>
    </tr>
  )
}

const Backoffice = ({ users }) => {
  const totalUsers = users.length

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
            <p className="card-text">5000</p>
          </div>
        </article>
        <article
          className="card bg-info text-white text-center"
          style={{ maxWidth: 300, width: '100%', height: 200 }}
        >
          <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title">Categories</h3>
            <p className="card-text">2</p>
          </div>
        </article>
      </div>

      <div class="row py-5">
        <div class="col-md-12 mb-3">
          <div class="card">
            <div class="card-header">
              <span>
                <i class="bi bi-table me-2"></i>
              </span>
              Users table
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
                      <th>ID</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Avatar</th>
                      <th>Role ID</th>
                      <th>Created At</th>
                      <th>Udpated At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 &&
                      users.map(user => <UserRow user={user} key={user.id} />)}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Avatar</th>
                      <th>Role ID</th>
                      <th>Created At</th>
                      <th>Udpated At</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backoffice
