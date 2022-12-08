import Button from '../Button/Button'

const Profile = ({ formik, edit, onEdit }) => {
  const cursor = edit ? 'text' : 'no-drop'

  const { values, handleChange, errors, touched, handleBlur, handleSubmit } =
    formik

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
            handleClick={onEdit}
            disabled={edit}
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

      <form className="mt-3 py-4">
        <div className="mb-3">
          <img
            className="rounded-circle"
            width={150}
            height={150}
            style={{ objectFit: 'cover' }}
            src={values.avatar}
            alt="Avatar"
          />
          {edit && (
            <input
              type="file"
              class="form-control-file ms-3"
              id="avatar"
              onChange={handleChange}
            />
          )}
        </div>
        <div class="mb-3">
          <label htmlFor="firstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            style={{ cursor }}
            id="firstName"
            placeholder="John"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly={!edit}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-danger">{errors.firstName}</p>
          )}
        </div>
        <div class="mb-3">
          <label htmlFor="lastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            style={{ cursor }}
            id="lastName"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly={!edit}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-danger">{errors.lastName}</p>
          )}
        </div>
        <div class="mb-4">
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            style={{ cursor }}
            id="email"
            placeholder="name@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            readOnly={!edit}
          />
          {errors.email && touched.email && (
            <p className="text-danger">{errors.email}</p>
          )}
        </div>

        {edit && (
          <Button
            type="submit"
            variant="primary"
            size="lg"
            handleClick={handleSubmit}
          >
            Update
          </Button>
        )}
      </form>
    </div>
  )
}

export default Profile
