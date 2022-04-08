import {useState, useEffect} from 'react'
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import img1 from '../assets/plantillas/juntos-siempre/1.png'
import img2 from '../assets/plantillas/juntos-siempre/2.png'
import img3 from '../assets/plantillas/juntos-siempre/3.png'
import Spinner from '../Spinner'
import Fade from 'react-reveal/Fade'
import Panel from '../Panel';

function JuntosSiempre() {
      //States
      const [juntosSiempre, setJuntosSiempre] = useState(null)
      const [headerImg, setHeaderImg] = useState(img1);
      const [bodyImg, setBodyImg] = useState(img2);
      const [bodyImg2, setBodyImg2] = useState(img3);
      const [checkClick, setCheckClick] = useState('')
      const [checkTextClick, setCheckTextClick] = useState('')
      const [rotate, setRotate] = useState(0)
      const [rotate2, setRotate2] = useState(0)
      const [rotate3, setRotate3] = useState(0)
      const [textSize, setTextSize] = useState('30')
      const [textSize2, setTextSize2] = useState('8')
      const [textColor, setTextColor] = useState('#000000')
      const [textColor2, setTextColor2] = useState('#000000')
      //Layout Load
      useEffect(() => {
        setJuntosSiempre({
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
      }, [])

      //FUNCTIONS
      //Click detection
      const showRotateBarOnClick = (id) => {
        setCheckClick(id)
      }
      const showTextPanelOnClick = (id) => {
        setCheckTextClick(id)
      }
      //Rotate IMG Actions
      const rotateFunction = (value) => {
        if(value === '1') {
          setRotate(-90)
        }
        if(value === '2'){
          setRotate(0)
        }
        if(value === '3'){
          setRotate(90)
        }
        if(value === '4'){
          setRotate(180)
        }
      }
      const rotateFunction2 = (value) => {
        if(value === '1') {
          setRotate2(-90)
        }
        if(value === '2'){
          setRotate2(0)
        }
        if(value === '3'){
          setRotate2(90)
        }
        if(value === '4'){
          setRotate2(180)
        }
      }
      const rotateFunction3 = (value) => {
        if(value === '1') {
          setRotate3(-90)
        }
        if(value === '2'){
          setRotate3(0)
        }
        if(value === '3'){
          setRotate3(90)
        }
        if(value === '4'){
          setRotate3(180)
        }
      }

      //Text actions
      const increaseDecreaseText = (value) => {
        setTextSize(value)
      }
      const increaseDecreaseText2 = (value) => {
        setTextSize2(value)
      }
      const changeTextColor = (value) => {
       setTextColor(value)
      }
      const changeTextColor2 = (value) => {
        setTextColor2(value)
       }
    return (
        <div>
          {!juntosSiempre ? <Spinner /> 
          :
          (
            juntosSiempre?.template.map((item) => {
              return(
                  <Fade>
                  <div className="page-template-flex">
                  <div className="header-img" 
                  style={{backgroundImage: `url(${headerImg})`, transform: `rotate(${rotate}deg)`}} 
                  id='1'
                  type='img'
                  onClick={(e) => showRotateBarOnClick(e.target.id)}
                  >
                      <input
                       type="file"
                       name="header-img"
                       id="header-img"
                       onChange={(e) => {
                         setHeaderImg(URL.createObjectURL(e.target.files[0]));
                       }}
                       />      
                       <label for="header-img">REEMPLAZAR IMAGEN</label>
                  </div>
                  <div className="body-img">                     
                      <div className="body-img1"  style={{backgroundImage: `url(${bodyImg})`, transform: `rotate(${rotate2}deg)`}} id='2' 
                      onClick={(e) => showRotateBarOnClick(e.target.id)}>
                        <input type="file" name="body-img1" id="body-img1"
                        onChange={(e) => {
                          setBodyImg(URL.createObjectURL(e.target.files[0]));
                        }}
                        />
                        <label for="body-img1">REEMPLAZAR IMAGEN</label>
                      </div>

                      <div className="body-img1"  style={{backgroundImage: `url(${bodyImg2})`, transform: `rotate(${rotate3}deg)`}} id='3'
                       onClick={(e) => showRotateBarOnClick(e.target.id)}>
                      <input type="file" name="body-img2" id="body-img2"
                        onChange={(e) => {
                          setBodyImg2(URL.createObjectURL(e.target.files[0]));
                        }}
                        />
                        <label for="body-img2">REEMPLAZAR IMAGEN</label>
                      </div>
                  </div>
            
                        <div className="texto-div-big-section">
                          <div className="texto-div" id='1' onClick={(e) => showTextPanelOnClick(e.target.id)}>
                           <div className="first-child" >
                              <EditText defaultValue={item.span} 
                              className="texto"
                              style={{fontSize:`${textSize}px`, color:`${textColor}`}}
                              id='1' 
                              onClick={(e) => showTextPanelOnClick(e.target.id)}/> 
                           </div>
                          </div> 
                             <p>|</p>
                          <div >   
                           <div className="second-child" id='2' onClick={(e) => showTextPanelOnClick(e.target.id)}>
                              <EditText defaultValue={item.text} 
                              id='2' 
                              style={{fontSize:`${textSize2}px`, color:`${textColor2}`}}
                              onClick={(e) => showTextPanelOnClick(e.target.id)}/> 
                            </div>
                           </div>
                         </div>
                  </div>
                  </Fade>
              )
          })
          )
          }
          <Panel 
          checkClick={checkClick} 
          checkTextClick={checkTextClick}
          rotateFunction={rotateFunction}
          rotateFunction2={rotateFunction2}
          rotateFunction3={rotateFunction3}
          increaseDecreaseText={increaseDecreaseText}
          increaseDecreaseText2={increaseDecreaseText2}
          changeTextColor={changeTextColor}
          changeTextColor2={changeTextColor2}
          />
        </div>
    )
}

export default JuntosSiempre