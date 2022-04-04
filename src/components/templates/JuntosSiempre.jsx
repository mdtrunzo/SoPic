import {useState, useEffect} from 'react'
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/plantillas/juntos-siempre/1.png'
import img2 from '../assets/plantillas/juntos-siempre/2.png'
import img3 from '../assets/plantillas/juntos-siempre/3.png'
import Spinner from '../Spinner'
import Fade from 'react-reveal/Fade'

function JuntosSiempre() {
    //States
      const [juntosSiempre, setJuntosSiempre] = useState(null)
      const [headerImg, setHeaderImg] = useState(img1);
      const [bodyImg, setBodyImg] = useState(img2);
      const [bodyImg2, setBodyImg2] = useState(img3);

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
                  style={{backgroundImage: `url(${headerImg})`}} 
                  id={uuidv4()}
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
                      <div className="body-img1"  style={{backgroundImage: `url(${bodyImg})`}} >
                        <input type="file" name="body-img1" id="body-img1"
                        onChange={(e) => {
                          setBodyImg(URL.createObjectURL(e.target.files[0]));
                        }}
                        />
                        <label for="body-img1">REEMPLAZAR IMAGEN</label>
                      </div>

                      <div className="body-img1"  style={{backgroundImage: `url(${bodyImg2})`}} >
                      <input type="file" name="body-img2" id="body-img2"
                        onChange={(e) => {
                          setBodyImg2(URL.createObjectURL(e.target.files[0]));
                        }}
                        />
                        <label for="body-img2">REEMPLAZAR IMAGEN</label>
                      </div>
                  </div>
            
                        <div className="texto-div-big-section">
                          <div className="texto-div">
                           <div className="first-child" >
                              <EditText defaultValue={item.span} className="texto"/> 
                           </div>
                          </div> 
                             <p>|</p>
                          <div >   
                           <div className="second-child" >
                              <EditText defaultValue={item.text} 
                             //  style={{fontSize:font, color:fontColor}} 
                              /> 
                            </div>
                           </div>
                         </div>
                  </div>
                  </Fade>
              )
          })
          )
          }
        </div>
    )
}

export default JuntosSiempre