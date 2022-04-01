import Pulse from 'react-reveal/Pulse';
// import BrushIcon from '@mui/icons-material/Brush';
import CloseIcon from '@mui/icons-material/Close';

function ColorSelect({close}){
        return (
              <div className='replace-img'>
                <Pulse>
                  {/* <BrushIcon />
                    <p>COLOR LETRA</p> */}
                    <div className="color-select">
                <div className="paleta-grid">
                    <div className="purple" style={{background: '#785AFF'}}></div>
                    <div className="pink" style={{background: '#FF99CC'}}></div>
                    <div className="verde-claro" style={{background: '#A2F451'}}></div>
                    <div className="verde-oscuro" style={{background: '#3CFAC6'}}></div>
                </div>
                <div className="paleta-grid">
                    <div className="rosa-fuerte" style={{background: '#DD55F3'}}></div>
                    <div className="amarillo" style={{background: '#DCF158'}}></div>
                    <div className="naranja" style={{background: '#F18971'}}></div>
                    <div className="negro" style={{background: '#000000'}}></div>
                </div>
            </div>
                </Pulse>
                  <CloseIcon className='close-panel' onClick={close}/>
              </div>
       
        )
    
    }

export default ColorSelect;