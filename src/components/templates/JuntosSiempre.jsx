import {useState} from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/plantillas/juntos-siempre/1.png'
import img2 from '../assets/plantillas/juntos-siempre/2.png'
import img3 from '../assets/plantillas/juntos-siempre/3.png'
import Fade from 'react-reveal/Fade'
import Test from '.././Test'

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
            p.innerHTML = "0"
          }
          if(val === '1'){
              setRotate(90)
              const p = document.getElementById('p')
            p.innerHTML = "90"
          }if (val === '2') {
              setRotate(180)
              const p = document.getElementById('p')
            p.innerHTML = "180"
          } if(val === '3'){
              setRotate(270)
              const p = document.getElementById('p')
            p.innerHTML = "270"
          }
      }

    return (
        <div>
            {juntosSiempre.template.map((item) => {
                return(
                    <Fade>
                    <div className="page-template-flex">
                    <div className="header-img" >
                        <img src={item.img1} alt="header" width={450} id={uuidv4()} style={{transform:`rotate(${rotate}deg)`}}/>       
                    </div>
                    <div className="body-img">                     
                        <img src={item.img2} alt="body-img1" width={230} id={uuidv4()} />
                        <img src={item.img3} alt="body-img2" width={230} id={uuidv4()} />                       
                    </div>
              
                    <div className="texto-div">
                      <EditText defaultValue={item.span} className="texto" /> 
                     |<EditText defaultValue={item.text} style={{fontSize:font, color:fontColor}} /> 
                    </div>
                 
                        <FontAwesomeIcon icon={faPlus} onClick={setFontSizeFunction}/>
                        <p>{font}</p>
                        <FontAwesomeIcon icon={faMinus} onClick={setFontSizeMinus}/>
                        <input type="color" name=""  id="colorValue" onChange={setFontColorFunction}/>
               
                  <input type="range" min={0} max={3} defaultValue={0} onChange={rotateFunction }/>
                  <p id="p">0</p>
                    </div>
                    </Fade>
                )
            })}
        </div>
    )
}

export default JuntosSiempre
