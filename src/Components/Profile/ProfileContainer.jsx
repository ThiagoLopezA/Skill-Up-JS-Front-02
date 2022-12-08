import Profile from './Profile'
import HomeroAvatar from '../../assets/homero.png'

const ProfileContainer = () => {
  const user = {
    firstName: 'Homero',
    lastName: 'Simpson',
    email: 'homero@mail.com',
    avatar: HomeroAvatar,
    password: 'Hola1234',
    roleId: 1,
  }

  return <Profile user={user} />
}

export default ProfileContainer
