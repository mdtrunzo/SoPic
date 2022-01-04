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
      const [font, setFont] = useState(14)
      const [fontColor, setFontColor] = useState('#000000')
      const [rotate, setRotate] = useState(0)
      const [headerImg, setHeaderImg] = useState(img1);

      //Functions
      const setFontSizeFunction = () => {
            setFont(font + 1)
      }
      const setFontSizeMinus = () => {
          setFont(font - 1)
      }
      const setFontColorFunction = (e) => {
          setFontColor(e.target.value)
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
              
                    <div className="texto-div">
                      <EditText defaultValue={item.span} className="texto" /> 
                     |<EditText defaultValue={item.text} 
                     style={{fontSize:font, color:fontColor}} 
                     /> 
                    </div>
                    <div className="font-size-bar letter-size">
                        <FontAwesomeIcon icon={faMinus} onClick={setFontSizeMinus}/>
                        <p>{font}</p>
                        <FontAwesomeIcon icon={faPlus} onClick={setFontSizeFunction}/>
                    </div>
                    <div className="color-select">
                        <input type="color" name=""  id="colorValue" onChange={setFontColorFunction}/>
                    </div>
                    </div>
                    </Fade>
                )
            })}
        </div>
    )
}

export default JuntosSiempre