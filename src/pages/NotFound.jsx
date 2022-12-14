import { Link } from 'react-router-dom'
import Illustration from '../assets/not-found-illustration.webp'

const NotFound = () => {
  return (
    <div className="container" style={{ height: '100%' }}>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center flex-column ps-5">
          <h2>Página no encontrada</h2>
          <p>No hemos podido econtrar la sección.</p>
          <p>Es posible que no exista o se haya modificado.</p>

          <Link
            to="/"
            className="btn btn-primary"
            style={{ width: 'fit-content' }}
          >
            Visitar la home
          </Link>
        </div>
        <div className="col-md-6">
          <img
            style={{ width: '100%', maxWidth: 340 }}
            src={Illustration}
            alt="Not Found illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
