import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import alerts from "../../services/alerts";
import styles from "./Profile.module.css";

import DefaultAvatar from "../../assets/default-avatar.png";

const API_URL = import.meta.env.VITE_API_URL;

const Profile = ({ formik, edit, onEdit }) => {
  const { values, handleSubmit, setFieldValue, isValid } = formik;

  const avatar =
    values.avatar === null
      ? DefaultAvatar
      : typeof values.avatar === "string"
      ? `${API_URL}/uploads/${values.avatar}`
      : URL.createObjectURL(values.avatar);

  const handleAvatar = e => {
    const file = e.target.files[0];
    setFieldValue("avatar", file);
  };

  const handleDelete = async () => {
    try {
      const response = await alerts.questionAlert(
        "¿Estás seguro que quieres eliminar tu cuenta?",
        "Una vez confirmado no se podrá revertir"
      );
      if (response.isConfirmed) console.log("DELETE PROFILE");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container pt-5">
      <div className="container-fluid">
        <form className="row">
          <div className="col-3">
            <div className="d-flex flew-column align-items-center">
              <div className="mb-3 d-flex flex-column align-items-center">
                <img
                  className="rounded-circle"
                  width={150}
                  height={150}
                  style={{ objectFit: "cover" }}
                  src={avatar}
                  alt="Avatar"
                />
                {edit && (
                  <>
                    <label htmlFor="avatar" className={styles.imageLabel}>
                      Cargar imagen
                    </label>
                    <input
                      type="file"
                      className={styles.inputFile}
                      name="avatar"
                      id="avatar"
                      onChange={handleAvatar}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <InputField
                  type="text"
                  name="firstName"
                  placeholder="John"
                  formik={formik}
                  readOnly={!edit}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <InputField
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  formik={formik}
                  readOnly={!edit}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
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
              </div>
              {/* CHANGE PASSWORD */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
