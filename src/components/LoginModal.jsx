// import Logo from './assets/logo.png'
// import Google from './assets/Google.png'
// import CloseIcon from '@mui/icons-material/Close';
// import { auth, provider } from '../firebase'
// import { useContext, useState } from 'react'
// import { StateContext } from '../context/StateProvider'

// function LoginModal({closeModal}) {
//   const [{user}, dispatch] = useContext(StateContext)
//   const [modal, setModal] = useState(null)

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

//   return (
//     <div className={`login-modal ${modal}`}>
//         <div className="overlay" onClick={closeModal}></div>
//         <form>
//             <CloseIcon className="close-modal" onClick={closeModal}/>
//             <img src={Logo} alt="" width="120"/>
//             <input type="text" placeholder="Nombre de usuario"/>
//             <input type="email" name="" id="email" placeholder="Correo Electrónico"/>
//             <button>INICIAR SESIÓN</button>
//             <span className='google-logo'>O iniciá sesión con:
//             <img src={Google} alt="Google Logo" width="40" onClick={logIn}/>
//             </span>
//             <span>Olvidé mi contraseña</span>
//             <span>Si no tenés una cuenta hacé click acá para crear una</span>
//         </form>
//     </div>
//   )
// }

// export default LoginModal