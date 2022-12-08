import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Profile from './Profile'
import HomeroAvatar from '../../assets/homero.png'

const ProfileContainer = () => {
  const [edit, setEdit] = useState(false)
  const handleEdit = () => setEdit(true)

  const initialValues = {
    firstName: 'Homero',
    lastName: 'Simpson',
    email: 'homero@mail.com',
    avatar: HomeroAvatar,
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(30).required(required),
    lastName: Yup.string().min(3).max(30).required(required),
    email: Yup.string().email().required(required),
    avatar: Yup.string().required(required),
  })

  const onSubmit = values => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return <Profile edit={edit} onEdit={handleEdit} formik={formik} />
}

export default ProfileContainer
