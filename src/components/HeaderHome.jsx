import Flip from 'react-reveal/Flip';
import logo from '../components/assets/logo.png';

function HeaderHome() {
    return (
        <div>
           <div className="header">       
              <Flip bottom>
                <div className="logo">
                  <img src={logo} width="105" alt="logo"/>
                </div>
              </Flip>  
           </div>   
        </div>
    )
}

export default HeaderHome
