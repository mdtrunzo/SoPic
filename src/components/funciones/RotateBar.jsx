import Pulse from 'react-reveal/Pulse';
import CloseIcon from '@mui/icons-material/Close';
// import AutorenewIcon from '@mui/icons-material/Autorenew';

function RotateBar({close}) {
        return (
          <div className='replace-img'>
            <Pulse>
               {/* <AutorenewIcon />
                <p>ROTAR IMAGEN</p> */}
                <div className="range-div">
                  <div className="range-div-header">
                     <p>IZQUIERDA</p>
                     <p>90°</p>
                     <p>DERECHA</p>
                  </div>
                  <input type="range" className='range'></input>   
                </div>         
            </Pulse>
            <CloseIcon className='close-panel' onClick={close}/>
        </div>
      
        )
}

export default RotateBar;