import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

function Zoom(){
        return (

            <div className="zoom-bar shadow-md">
              <div className="zoom-range">
              <FontAwesomeIcon icon={faMinus} className="zoom-icon"/>
                  <input type="range" name="" id="" />
              <FontAwesomeIcon icon={faPlus} className="zoom-icon"/>
              </div>
              <p>ZOOM</p>
            </div>

        )
    
    }

export default Zoom;