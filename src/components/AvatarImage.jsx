// import { Avatar } from '@mui/material';
// import Fade from 'react-reveal/Fade';
// import { useContext, useState } from 'react'
// // import { StateContext } from '../context/StateProvider'
// import LogoutIcon from '@mui/icons-material/Logout';
// import LoginModal from './LoginModal';

// function AvatarImage() {
//   // const [{ user }] = useContext(StateContext)
//   // const [showModal, setShowModal] = useState(null)

//   // const showModalClick = () => {
//   //   setShowModal(true)
//   // }

//   // const closeModal = () => {
//   //   setShowModal(null)
//   // }
//   return (
//     <>
//     <Fade right>
//     <div className='avatar-div'>
//       {true ? 
//       <Avatar alt="User Profile Image" 
//         src={user?.photoURL} 
//         className='avatar'
//           /> 
//           : <Avatar 
//         />}
//           <p> {user ? (
//             <div className='close-session'>
//                <p>Hola, {user?.displayName}!</p>
//                <p className='iniciar-sesion'><LogoutIcon /></p>
//             </div>
//             ) 
//           : 
//           <p className='iniciar-sesion' onClick={showModalClick}>INICIAR SESION</p>}</p>
//     </div>

//     </Fade>
//     {showModal && <LoginModal closeModal={closeModal}/>}
//     </>
//   )
// }

// export default AvatarImage