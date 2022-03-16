import Logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

function LoginModal({closeModal}) {
  return (
    <div className='login-modal'>
        <div className="overlay" onClick={closeModal}></div>
        <form>
            <FontAwesomeIcon icon={faWindowClose} className="close-modal" onClick={closeModal}/>
            <img src={Logo} alt="" width="120"/>
            <input type="text" placeholder="Nombre de usuario"/>
            <input type="email" name="" id="email" placeholder="Correo Electrónico"/>
            <button>INICIAR SESIÓN</button>
            <span>Olvidé mi contraseña</span>
            <span>Si no tenés una cuenta hacé click acá para crear una</span>
        </form>
    </div>
  )
}

export default LoginModal