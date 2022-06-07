import logo from '../components/assets/logo-blanco.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SaveIcon from '@mui/icons-material/Save';
import ReplayIcon from '@mui/icons-material/Replay';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Flip from 'react-reveal/Flip'
// import Avatar from './AvatarImage';


function Header({login}) {
        return (
            <div className="header">
                <nav className="navbar navbar-left">
                <ul>
                  <a href="https://sopic.shop">
                      <div className="iconos-menu">
                       <ExitToAppIcon />
                        <li>SALIR</li>
                      </div>
                  </a>
                    <div className="iconos-menu" onClick={login}>
                      <SaveIcon />
                      <li>GUARDAR</li>
                    </div>
                </ul>
     
                </nav>

                <Flip bottom>
                <div className="logo">
                  <img src={logo} width="105" alt="logo"/>
                </div>
                </Flip>
                <nav className="navbar navbar-right">
                <ul>
                    <div className="iconos-menu">
                      <ReplayIcon />
                      <li>DESHACER</li>
                    </div>
                    <a href='https://testing.ribaslegales.com.ar/index.php/carrito/'>
                    <div className="iconos-menu">
                      <ShoppingBagIcon />
                      <li>TERMINAR</li>
                    </div>
                    </a>
                   
                </ul>
                </nav>
               {/* <Avatar /> */}
            </div>
        )
    }

export default Header;



