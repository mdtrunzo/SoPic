import Pulse from 'react-reveal/Pulse';
import CloseIcon from '@mui/icons-material/Close';

function RotateBar({close}) {
        return (
          <div className='replace-img'>
            <Pulse>
              {!true ? <p style={{paddingTop: '10px', color:'#785AFF', fontSize:'14px'}}>Selecciona la imagen <br />que deseas rotar</p> 
              :
              (
                <div className="range-div">
                 <div className="range-div-header">
                   <p>IZQUIERDA</p>
                   <p>90°</p>
                   <p>DERECHA</p>
                 </div>
                  <input type="range" className='range'></input>   
                </div>       
              )
              }  
            </Pulse>
            <CloseIcon className='close-panel' onClick={close}/>
        </div>
      
        )
}

export default RotateBar;