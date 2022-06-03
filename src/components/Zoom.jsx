import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Zoom({zoomIn, zoomOut}){
        return (

            <div className="zoom-bar shadow-md">
              <div className="zoom-range">

              <RemoveIcon className="zoom-icon" onClick={() => zoomOut()}/>
                  {/* <input type="range" name="" id="" /> */}
                  <p>ZOOM</p>
              <AddIcon className="zoom-icon" onClick={() => zoomIn()}/>
              </div>

            </div>

        )
    
    }

export default Zoom;