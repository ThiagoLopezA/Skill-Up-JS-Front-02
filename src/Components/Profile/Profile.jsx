import Button from '../Button/Button'

const Profile = ({ user }) => {
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

      <form className="mt-3">
        <div className="mb-3">
          <img
            className="rounded-circle"
            width={150}
            height={150}
            style={{ objectFit: 'cover' }}
            src={user.avatar}
            alt="Avatar"
          />
          <input type="file" class="form-control-file ms-3" id="avatar" />
        </div>
        <div class="mb-3">
          <label for="firstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            style={{ cursor: 'no-drop' }}
            id="firstName"
            placeholder="John"
            value={user.firstName}
            readOnly
          />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            style={{ cursor: 'no-drop' }}
            id="lastName"
            placeholder="Doe"
            value={user.lastName}
            readOnly
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            style={{ cursor: 'no-drop' }}
            id="email"
            placeholder="name@example.com"
            value={user.email}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg">
          Update
        </button>
      </form>
    </div>
  )
}

export default Profile
