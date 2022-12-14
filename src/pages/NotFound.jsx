import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button/Button'
import Illustration from '../assets/not-found-illustration.webp'

const NotFound = () => {
  const navigate = useNavigate()
  const handleRedirect = link => navigate(link)

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center flex-column ps-5">
          <h2>Página no encontrada</h2>
          <p>No hemos podido econtrar la sección.</p>
          <p>Es posible que no exista o se haya modificado.</p>

          <div>
            <Button
              variant="primary"
              size="md"
              handleClick={() => handleRedirect('/')}
            >
              Visitar la home
            </Button>
          </div>
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
