import Pulse from 'react-reveal/Pulse';
// import CollectionsIcon from '@mui/icons-material/Collections';
import CloseIcon from '@mui/icons-material/Close';

function ReplaceImg({close}) {
        return (
              <div className='replace-img'>
                <Pulse>
                    <p style={{paddingTop: '10px', color:'#785AFF'}}>Toca la imagen que <br /> deseas reemplazar</p>
                    {/* <button>SUBIR FOTO</button> */}
                </Pulse>
                  <CloseIcon className='close-panel' onClick={close}/>
              </div>
        )
}

export default ReplaceImg