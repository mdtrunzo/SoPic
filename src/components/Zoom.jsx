import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Zoom(){
        return (

            <div className="zoom-bar shadow-md">
              <div className="zoom-range">
              <RemoveIcon className="zoom-icon"/>
                  <input type="range" name="" id="" />
              <AddIcon className="zoom-icon"/>
              </div>
              <p>ZOOM</p>
            </div>

        )
    
    }

export default Zoom;