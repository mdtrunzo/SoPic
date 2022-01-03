import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Zoom(){
        return (
            <div className="zoom-bar shadow-md">
              <FontAwesomeIcon icon={faMinus} className="zoom-icon"/>
              <p>ZOOM</p>
              <FontAwesomeIcon icon={faPlus} className="zoom-icon"/>
            </div>
        )
    
    }

export default Zoom;