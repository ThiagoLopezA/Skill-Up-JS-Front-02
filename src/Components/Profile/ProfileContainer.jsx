import { useState } from 'react'
import Profile from './Profile'
import HomeroAvatar from '../../assets/homero.png'

const ProfileContainer = () => {
  const [edit, setEdit] = useState(false)

  const handleEdit = () => setEdit(true)

  const user = {
    firstName: 'Homero',
    lastName: 'Simpson',
    email: 'homero@mail.com',
    avatar: HomeroAvatar,
    password: 'Hola1234',
    roleId: 1,
  }

  return <Profile user={user} edit={edit} onEdit={handleEdit} />
}

export default ProfileContainer
