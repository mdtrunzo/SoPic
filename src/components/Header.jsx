import logo from '../components/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSave, faUndo, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Flip from 'react-reveal/Flip';

function Header() {
        return (
            <div className="header">
                <nav className="navbar navbar-left">
     
                <ul>
                    <div className="iconos-menu">
                      <FontAwesomeIcon icon={faSignOutAlt}/>
                      <li>SALIR</li>
                    </div>
                    <div className="iconos-menu">
                      <FontAwesomeIcon icon={faSave}/>
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
                      <FontAwesomeIcon icon={faUndo}/>
                      <li>DESHACER</li>
                    </div>
                    <div className="iconos-menu">
                      <FontAwesomeIcon icon={faShoppingBag}/>
                      <li>TERMINAR</li>
                    </div>
                </ul>
                </nav>
            </div>
        )
    }

export default Header;



