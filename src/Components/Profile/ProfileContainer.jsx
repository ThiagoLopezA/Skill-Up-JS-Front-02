import Profile from './Profile'

const ProfileContainer = () => {
  const user = {
    firstName: 'Homero',
    lastName: 'Simpson',
    email: 'homero@mail.com',
    avatar: '1.img',
    password: 'Hola1234',
    roleId: 1,
  }

  return <Profile user={user} />
}

export default ProfileContainer
