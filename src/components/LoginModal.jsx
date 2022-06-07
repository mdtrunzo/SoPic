import Logo from './assets/logo.png'
import Google from './assets/Google.png'
import CloseIcon from '@mui/icons-material/Close'
// import { auth, provider } from '../firebase'
import { useState } from 'react'
// import { StateContext } from '../context/StateProvider'
import axios from 'axios'

function LoginModal({ closeModal }) {
  //   const [{user}, dispatch] = useContext(StateContext)
  const [modal, setModal] = useState(null)
  const [userNameForm, setUserNameForm] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({
    username: 'admin',
    password: 'Testing1234',
    userNiceName: '',
    userEmail: '',
    loggedIn: false,
    loading: false,
    error: '',
  })

  //   const logIn = () => {
  //     auth.signInWithPopup(provider)
  //         .then(result => {
  //             dispatch({
  //                 type: 'SET_USER',
  //                 user: result.user
  //             })
  //             setModal('close-modal-window')
  //             console.log(user)
  //         })
  //         .catch(err => console.log(err.message))
  //   }

  const logIn = () => {
    setModal(modal)
  }

  const handleOnChange = (e) => {
      const nameValue = e.target.value
      setUserNameForm(nameValue)
  }
  const handleOnChangePassword = (e) => {
      const passwordValue = e.target.value
      setPassword(passwordValue)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    
    const siteUrl = 'https://testing.ribaslegales.com.ar'

    const loginData = {
        username: user.username,
        password: user.password,
        loading: true,
    }

        axios.post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
        .then(res => setUser({
            userNiceName: res.data.user_nicename,
            userEmail: res.data.user_email
        }))
        .catch(err => console.log(err.response.data))
  }

  console.log(user.userNiceName, user.userEmail)

  return (
    <div className={`login-modal ${modal}`}>
      <div className="overlay" onClick={closeModal}></div>
      <form onSubmit={onFormSubmit}>
        <CloseIcon className="close-modal" onClick={closeModal} />
        <img src={Logo} alt="" width="120" />
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={userNameForm}
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleOnChangePassword}
        />
        <button type='submit' >INICIAR SESIÓN</button>
        <span className="google-logo">
          O iniciá sesión con:
          <img src={Google} alt="Google Logo" width="40" onClick={logIn} />
        </span>
        <span>Olvidé mi contraseña</span>
        <span>Si no tenés una cuenta hacé click acá para crear una</span>
      </form>
    </div>
  )
}

export default LoginModal
