import logo from '../components/assets/logo-blanco.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SaveIcon from '@mui/icons-material/Save';
import ReplayIcon from '@mui/icons-material/Replay';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom'
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
                    <Link to='https://testing.ribaslegales.com.ar/index.php/carrito/'>
                    <div className="iconos-menu">
                      <ShoppingBagIcon />
                      <li>TERMINAR</li>
                    </div>
                    </Link>
                   
                </ul>
                </nav>
               {/* <Avatar /> */}
            </div>
        )
    }

export default Header;



