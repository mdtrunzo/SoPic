import {useState} from 'react'
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/plantillas/juntos-siempre/1.png'
import img2 from '../assets/plantillas/juntos-siempre/2.png'
import img3 from '../assets/plantillas/juntos-siempre/3.png'
import Fade from 'react-reveal/Fade'

function JuntosSiempre() {
    //States
      const [juntosSiempre] = useState({
        "template": [
          {
            "id": 1,
            "img1": `${img1}`,
            "img2": `${img2}`,
            "img3": `${img3}`,
            "span": "Juntos Siempre",
            "text": "NUESTRO LUGAR EN EL MUNDO"
          }
        ]
      })
      const [font, setFont] = useState(10)
      const [fontLeft, setFontLeft] = useState(40)
      // const [fontColor, setFontColor] = useState('#000000')
      const [fontColorLeft, setFontColorLeft] = useState('#000000')
      const [rotate, setRotate] = useState(0)
      const [headerImg, setHeaderImg] = useState(img1);

      //Functions
      const setFontSizeFunction = () => {
            setFont(font + 1)
      }
      const setFontSizeMinus = () => {
          setFont(font - 1)
      }
      const setFontSizeFunctionLeft = () => {
        setFontLeft(fontLeft + 1)
  }
  const setFontSizeMinusLeft = () => {
      setFontLeft(fontLeft - 1)
  }
      // const setFontColorFunction = (e) => {
      //     setFontColor(e.target.value)
      // }
      const setFontColorFunctionLeft = (e) => {
        setFontColorLeft(e.target.value)
    }
      const rotateFunction = (e) => {
          let val = e.target.value
          if(val === '0'){
            setRotate(0)
            const p = document.getElementById('p')
            p.innerHTML = "0°"
          }
          if(val === '1'){
              setRotate(90)
              const p = document.getElementById('p')
            p.innerHTML = "90°"
          }if (val === '2') {
              setRotate(180)
              const p = document.getElementById('p')
            p.innerHTML = "180°"
          } if(val === '3'){
              setRotate(270)
              const p = document.getElementById('p')
            p.innerHTML = "270°"
          }
      }
      const showRotateBar = () => {
        const rotateBar = document.getElementById('rotate-bar')
        rotateBar.style.display = 'block'
      }
      const closeRotateBar = () => {
        const rotateBar = document.getElementById('rotate-bar')
        rotateBar.style.display = 'none'
      }
      const showTextColorAndSize = () => {
        const fontSizeBar = document.getElementById('font-size-bar')
        const colorSelect = document.getElementById('color-select')
        fontSizeBar.style.display = 'flex'
        colorSelect.style.display = 'flex'
      }
      const showTextColorAndSizeLeft = () => {
        const fontSizeBar = document.getElementById('font-size-bar-left')
        const colorSelect = document.getElementById('color-select-left')
        fontSizeBar.style.display = 'flex'
        colorSelect.style.display = 'flex'
      }
      // const closeTextColorAndSize = () => {
      //   const fontSizeBar = document.getElementById('font-size-bar')
      //   const colorSelect = document.getElementById('color-select')
      //   fontSizeBar.style.display = 'none'
      //   colorSelect.style.display = 'none'
      // }
      const closeTextColorAndSizeLeft = () => {
        const fontSizeBar = document.getElementById('font-size-bar-left')
        const colorSelect = document.getElementById('color-select-left')
        fontSizeBar.style.display = 'none'
        colorSelect.style.display = 'none'
      }



    return (
        <div>
            {juntosSiempre.template.map((item) => {
                return(
                    <Fade>
                    <div className="page-template-flex">
                    <div className="header-img" 
                    style={{backgroundImage: `url(${headerImg})`,transform:`rotate(${rotate}deg)`}} 
                    id={uuidv4()}
                    onClick={showRotateBar}
                    >
                        <input
                         type="file"
                         name="header-img"
                         id="header-img"
                         onChange={(e) => {
                           console.log(e.target.files[0]);
                           setHeaderImg(URL.createObjectURL(e.target.files[0]));
                         }}
                         />      
                         <label for="header-img">REEMPLAZAR IMAGEN</label>
                    </div>
                    <div className="rotate-bar-img" id='rotate-bar' >
                       <input type="range" min={0} max={3} defaultValue={0} onChange={rotateFunction }/>
                       <p id="p">{rotate}°</p>
                       <FontAwesomeIcon icon={faTimes} className='close-block' onClick={closeRotateBar}/>
                    </div>
                    <div className="body-img">                     
                        <img src={item.img2} alt="body-img1" width={230} id={uuidv4()} />
                        <img src={item.img3} alt="body-img2" width={230} id={uuidv4()} />                       
                    </div>
              
                   <div className="texto-div-big-section">
                    <div className="texto-div" onClick={showTextColorAndSizeLeft}>
                      <div className="first-child" >
                         <EditText defaultValue={item.span} className="texto"
                         style={{fontSize:fontLeft, color:fontColorLeft}}
                         /> 
                      </div>
                     </div> 
                        <p>|</p>
                     <div onClick={showTextColorAndSize}>   
                      <div className="second-child" >
                         <EditText defaultValue={item.text} 
                        //  style={{fontSize:font, color:fontColor}} 
                         /> 
                     </div>
                    </div>
                    </div>
                    {/* BEGIN SIZE Y COLOR DERECHA */}
                    <div className="font-size-bar " id="font-size-bar" >
                        <FontAwesomeIcon icon={faMinus} onClick={setFontSizeMinus}/>
                        <p>{font}</p>
                        <FontAwesomeIcon icon={faPlus} onClick={setFontSizeFunction}/>
                    </div>
                    {/* <div className="color-select" id='color-select'>
                    <FontAwesomeIcon icon={faTimes} className='close-block' onClick={closeTextColorAndSize}/>
                        <input type="color" name=""  id="colorValue" onChange={setFontColorFunction}/>
                    </div> */}
                    {/* END SIZE Y COLOR DERECHA */}
                     {/* BEGIN SIZE Y COLOR IZQUIERDA */}
                     <div className="font-size-bar-left" id="font-size-bar-left" >
                        <FontAwesomeIcon icon={faMinus} onClick={setFontSizeMinusLeft}/>
                        <p>{fontLeft}</p>
                        <FontAwesomeIcon icon={faPlus} onClick={setFontSizeFunctionLeft}/>
                    </div>
                    <div className="color-select-left" id='color-select-left'>
                    <FontAwesomeIcon icon={faTimes} className='close-block' onClick={closeTextColorAndSizeLeft}/>
                        <input type="color" name=""  id="colorValue" onChange={setFontColorFunctionLeft}/>
                    </div>
                    {/* END SIZE Y COLOR IZQUIERDA */}
                    </div>
                    </Fade>
                )
            })}
        </div>
    )
}

export default JuntosSiempre