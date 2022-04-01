import Pulse from 'react-reveal/Pulse';
// import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function LetterSize({close}) {
        return (
             <div className='replace-img'>
             <Pulse>
               {/* <TextIncreaseIcon />
                 <p>TAMAÑO LETRA</p> */}
                 <div className='letter-size'>
                <RemoveIcon />
                <p>12</p>
                <AddIcon />
            </div>
             </Pulse>
               <CloseIcon className='close-panel' onClick={close}/>
           </div>
        )    
    }

export default LetterSize;