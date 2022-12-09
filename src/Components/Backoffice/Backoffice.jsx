const Backoffice = () => {
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
            <p className="card-text">2000</p>
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
    </div>
  )
}

export default Backoffice
