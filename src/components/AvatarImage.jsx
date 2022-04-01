import { Avatar } from '@mui/material';
import Fade from 'react-reveal/Fade';

function AvatarImage() {

  return (
    <Fade right>
    <div className='avatar-div'>
      {true ? 
      <Avatar alt="User Profile Image" 
        src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" 
        className='avatar'
          /> 
          : <Avatar 
        />}
          <p> {true ? `Hola, Matías Trunzo!` : 'Iniciar Sesión'}</p>
    </div>
    </Fade>
  )
}

export default AvatarImage