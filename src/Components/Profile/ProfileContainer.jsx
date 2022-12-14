import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, updateUser } from '../../app/authSlice'

import Profile from './Profile'

const ProfileContainer = () => {
  const user = useSelector(getUser)
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)

  const handleEdit = () => setEdit(true)

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
  }

  const required = 'required field'
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(30).required(required),
    lastName: Yup.string().min(3).max(30).required(required),
    email: Yup.string().email().required(required),
  })

  const onSubmit = changes => {
    const changesArr = Object.keys(changes).filter(
      item => changes[item] !== user[item]
    )

    if (changesArr.length > 0) {
      const form = new FormData()
      changesArr.forEach(key => {
        form.append(key, changes[key])
      })

      dispatch(updateUser({ changes, id: user.id }))
      setEdit(false)
    }
  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  useEffect(() => {
    if (user) {
      formik.setValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
      })
    }
  }, [user])

  return <Profile edit={edit} onEdit={handleEdit} formik={formik} />
}

export default ProfileContainer
