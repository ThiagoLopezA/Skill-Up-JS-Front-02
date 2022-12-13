import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import alerts from '../../services/alerts'

const Profile = ({ formik, edit, onEdit }) => {
  const { values, handleSubmit, setFieldValue, isValid } = formik

  const handleAvatar = e => {
    const file = e.target.files[0]
    setFieldValue('avatar', URL.createObjectURL(file))
  }

  const handleDelete = async () => {
    try {
      const response = await alerts.questionAlert(
        '¿Estás seguro que quieres eliminar tu cuenta?',
        'Una vez confirmado no se podrá revertir'
      )
      if (response.isConfirmed) console.log('DELETE PROFILE')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container pt-5">
      <h1 className="mb-4">My Profile</h1>

      <div className="d-flex justify-content-between">
        <h2>Personal information</h2>
        <div className="d-flex gap-3">
          <Button
            type="button"
            variant="outlined"
            size="md"
            handleClick={onEdit}
            disabled={edit}
          >
            Edit
          </Button>
          <Button
            type="button"
            variant="outlined"
            size="md"
            handleClick={handleDelete}
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
              name="avatar"
              id="avatar"
              onChange={handleAvatar}
            />
          )}
        </div>
        <div class="mb-3">
          <label htmlFor="firstName" class="form-label">
            First Name
          </label>
          <InputField
            type="text"
            name="firstName"
            placeholder="John"
            formik={formik}
            readOnly={!edit}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="lastName" class="form-label">
            Last Name
          </label>
          <InputField
            type="text"
            name="lastName"
            placeholder="Doe"
            formik={formik}
            readOnly={!edit}
          />
        </div>
        <div class="mb-4">
          <label htmlFor="email" class="form-label">
            Email
          </label>
          <InputField
            type="text"
            name="email"
            placeholder="name@example.com"
            formik={formik}
            readOnly={!edit}
          />
        </div>

        {/* CHANGE PASSWORD */}

        {edit && (
          <Button
            type="submit"
            variant="primary"
            size="md"
            handleClick={handleSubmit}
            disabled={!isValid}
          >
            Update
          </Button>
        )}
      </form>
    </div>
  )
}

export default Profile
