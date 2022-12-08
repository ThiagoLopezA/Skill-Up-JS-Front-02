import Button from '../Button/Button'

const Profile = () => {
  return (
    <div className="container pt-5">
      <h1 className="mb-4">My Profile</h1>
      <div className="d-flex justify-content-between">
        <h2>Personal information</h2>
        <div className="d-flex gap-3">
          <Button
            type="button"
            variant="warning"
            size="lg"
            handleClick={() => {}}
          >
            Edit
          </Button>
          <Button
            type="button"
            variant="danger"
            size="lg"
            handleClick={() => {}}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
