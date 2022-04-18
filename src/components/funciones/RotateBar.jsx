import Pulse from 'react-reveal/Pulse';
import CloseIcon from '@mui/icons-material/Close';
import {useState, useEffect} from 'react'

function RotateBar({close, checkClick, rotateFunction, rotateFunction2, rotateFunction3}) {
  const [showRotate, setShowRotate] = useState(0)
  const [rotateNumber, setRotateNumber] = useState(0)
  const [rotateNumber2, setRotateNumber2] = useState(0)
  const [rotateNumber3, setRotateNumber3] = useState(0)

  useEffect(() => {
  if(checkClick === '1') {
    setShowRotate(1)
  }
  if(checkClick === '2'){
    setShowRotate(2)
  }
  if(checkClick === '3'){
    setShowRotate(3)
  }
  },[checkClick])


 //Rotate Action
 const rotateAction = (value) => {
  setRotateNumber(value)
}
const rotateAction2 = (value) => {
setRotateNumber2(value)
}
const rotateAction3 = (value) => {
 setRotateNumber3(value)
}

        return (
          <div className='replace-img'>
            <Pulse>
              {showRotate === 1  ? 
               (
                <div className="range-div">
                 <div className="range-div-header">
                   <p>IZQUIERDA</p>
                   <p>{rotateNumber}°</p>
                   <p>DERECHA</p>
                 </div>
                  <input type="range" className='range' min={-180} max={180} defaultValue={0} onChange={(e) => {rotateFunction(e.target.value); rotateAction(e.target.value)}}></input>   
                </div>       
              )
              : 
              <>
              {showRotate === 2 ? 
              (
                <div className="range-div">
                 <div className="range-div-header">
                   <p>IZQUIERDA</p>
                   <p>{rotateNumber2}°</p>
                   <p>DERECHA</p>
                 </div>
                  <input type="range" className='range' min={-180} max={180} defaultValue={0} onChange={(e) => {rotateFunction2(e.target.value); rotateAction2(e.target.value)}}></input>   
                </div>      
              )
              :
              <>
              {showRotate === 3 ?
              (
                <div className="range-div">
                 <div className="range-div-header">
                   <p>IZQUIERDA</p>
                   <p>{rotateNumber3}°</p>
                   <p>DERECHA</p>
                 </div>
                  <input type="range" className='range' min={-180} max={180} defaultValue={0} onChange={(e) => {rotateFunction3(e.target.value); rotateAction3(e.target.value)}}></input>   
                </div>   
              )
            :
            <p style={{paddingTop: '10px', color:'#785AFF', fontSize:'14px'}}>Selecciona la imagen <br />que deseas rotar</p> }
              </>
              }
              </>
              }  
              
            </Pulse>
           
            <CloseIcon className='close-panel' onClick={close}/>
        </div>
        )
}

export default RotateBar;