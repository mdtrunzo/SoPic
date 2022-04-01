import Pulse from 'react-reveal/Pulse';
// import CollectionsIcon from '@mui/icons-material/Collections';
import CloseIcon from '@mui/icons-material/Close';

function ReplaceImg({close}) {
        return (
              <div className='replace-img'>
                <Pulse>
                  {/* <CollectionsIcon />
                    <p>REEMPLAZAR IMAGEN</p> */}
                    <button>SUBIR FOTO</button>
                </Pulse>
                  <CloseIcon className='close-panel' onClick={close}/>
              </div>
        )
}

export default ReplaceImg