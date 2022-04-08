import {useState, useEffect} from 'react'
import Pulse from 'react-reveal/Pulse';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ColorSelect({close, checkTextClick, increaseDecreaseText, increaseDecreaseText2, changeTextColor, changeTextColor2}){
    const colors = ['#785AFF', '#FF99CC', '#A2F451', '#3CFAC6','#DD55F3', '#DCF158', '#F18971', '#000000' ]
    //States
    const [showIncrease, setShowIncrease] = useState(0)
    const [letterSizeNumber, setLetterSizeNumber] = useState(30)
    const [letterSizeNumber2, setLetterSizeNumber2] = useState(8)
    //Click Detection
    useEffect(() => {
        if(checkTextClick === '1'){
          setShowIncrease(1) 
        }
        if(checkTextClick === '2'){
         setShowIncrease(2)
        }
    },[checkTextClick])

    //Functions
    const decreaseLetterNumber = () => {
        if(letterSizeNumber === 0){
            return
        } else{
            setLetterSizeNumber(letterSizeNumber - 1)
        }
    }
    const increaseLetterNumber = () => {
        setLetterSizeNumber(letterSizeNumber + 1)
    }

    const decreaseLetterNumber2 = () => {
        if(letterSizeNumber2 === 0){
            return
        } else{
            setLetterSizeNumber2(letterSizeNumber2 - 1)
        }
    }
    const increaseLetterNumber2 = () => {
        setLetterSizeNumber2(letterSizeNumber2 + 1)
    }
        return (
              <div className='replace-img increase-panel'>
                 <Pulse>
                   {showIncrease === 1 ? 
                     (
                        <>
                          <div className='letter-size' > 
                             <RemoveIcon onClick={decreaseLetterNumber}/>
                               {increaseDecreaseText(letterSizeNumber)}
                               <p>{letterSizeNumber}</p>
                             <AddIcon onClick={increaseLetterNumber}/>
                          </div>
                          <div className="color-select">
                            <div className="paleta-grid">
                               {colors.map((color, index) => {
                                 return <div key={index} id={color} style={{background: `${color}`}} onClick={(e) => changeTextColor(e.target.id)}></div>
                                })}
                            </div>
                         </div>
                        </>
                    )
                    :
                    <>
                    {showIncrease === 2 ?
                      <>
                      <div className='letter-size' > 
                         <RemoveIcon onClick={decreaseLetterNumber2}/>
                         {increaseDecreaseText2(letterSizeNumber2)}
                         <p>{letterSizeNumber2}</p>
                         <AddIcon onClick={increaseLetterNumber2}/>
                      </div>
                      <div className="color-select">
                        <div className="paleta-grid">
                           {colors.map(color => {
                             return <div id={color} style={{background: `${color}`}} onClick={(e) => changeTextColor2(e.target.id)}></div>
                            })}
                        </div>
                     </div>
                    </>
                 :
                 <p style={{paddingTop: '10px', color:'#785AFF', fontSize:'14px', }}>Selecciona el texto <br />que deseas modificar</p>     
                }
                    </>
                  } 
             </Pulse>
                  <CloseIcon className='close-panel' onClick={close}/>
              </div>
       
        )
    
    }

export default ColorSelect;