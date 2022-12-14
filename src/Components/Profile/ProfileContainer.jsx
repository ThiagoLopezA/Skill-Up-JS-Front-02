import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { getUser } from '../../app/authSlice'

import Profile from './Profile'
import HomeroAvatar from '../../assets/homero.png'

const ProfileContainer = () => {
  const user = useSelector(getUser)

  const [edit, setEdit] = useState(false)

  const handleEdit = () => setEdit(true)

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(30).required(required),
    lastName: Yup.string().min(3).max(30).required(required),
    email: Yup.string().email().required(required),
    avatar: Yup.string().required(required),
  })

  const onSubmit = values => {}

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  useEffect(() => {
    if (user)
      formik.setValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar ? user.avatar : HomeroAvatar,
      })
  }, [user])

  return <Profile edit={edit} onEdit={handleEdit} formik={formik} />
}

export default ProfileContainer
