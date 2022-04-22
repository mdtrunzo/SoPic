import {useState, useEffect} from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text';
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css';
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner';
import Panel from '../../Panel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CollagesUno() {
    const [collageUno, setCollageUno] = useState(null)
    const [getImg1, setImg1] = useState(img);
    const [getImg2, setImg2] = useState(img);
    const [getImg3, setImg3] = useState(img);
    const [getImg4, setImg4] = useState(img);
    const [getImg5, setImg5] = useState(img);
    const [getImg6, setImg6] = useState(img);
    const [getImg7, setImg7] = useState(img);
    const [getImg8, setImg8] = useState(img);
    const [getImg9, setImg9] = useState(img);
    const [getImg10, setImg10] = useState(img);
    const [getImg11, setImg11] = useState(img);
    const [getImg12, setImg12] = useState(img);
    const [checkClick, setCheckClick] = useState('')
    const [checkTextClick, setCheckTextClick] = useState('')
    const [rotate, setRotate] = useState(0)
    const [rotate2, setRotate2] = useState(0)
    const [rotate3, setRotate3] = useState(0)
    const [rotate4, setRotate4] = useState(0)
    const [rotate5, setRotate5] = useState(0)
    const [rotate6, setRotate6] = useState(0)
    const [rotate7, setRotate7] = useState(0)
    const [rotate8, setRotate8] = useState(0)
    const [rotate9, setRotate9] = useState(0)
    const [rotate10, setRotate10] = useState(0)
    const [rotate11, setRotate11] = useState(0)
    const [rotate12, setRotate12] = useState(0)
    const [textSize, setTextSize] = useState('22')
    const [textColor, setTextColor] = useState('#000000')
    const [textSize2, setTextSize2] = useState('16')
    const [textColor2, setTextColor2] = useState('#000000')

    useEffect(() => {
        setCollageUno({
            "template": [
              {
                "id": 1,
                "img1": `${img}`,
                "img2": `${img}`,
                "img3": `${img}`,
                "img4": `${img}`,
                "img5": `${img}`,
                "img6": `${img}`,
                "img7": `${img}`,
                "img8": `${img}`,
                "img9": `${img}`,
                "img10": `${img}`,
                "img11": `${img}`,
                "img12": `${img}`,
                "span": "TENEMOS AL MEJOR",
                "text": "Gracias Pa!"
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
      const rotateFunction = (value) => {
        setRotate(value)
      }
      const rotateFunction2 = (value) => {
        setRotate2(value)
      }
      const rotateFunction3 = (value) => {
        setRotate3(value)
      }
      const rotateFunction4 = (value) => {
        setRotate4(value)
      }
      const rotateFunction5 = (value) => {
        setRotate5(value)
      }
      const rotateFunction6 = (value) => {
        setRotate6(value)
      }
      const rotateFunction7 = (value) => {
        setRotate7(value)
      }
      const rotateFunction8 = (value) => {
        setRotate8(value)
      }
      const rotateFunction9 = (value) => {
        setRotate9(value)
      }
      const rotateFunction10 = (value) => {
        setRotate10(value)
      }
      const rotateFunction11 = (value) => {
        setRotate11(value)
      }
      const rotateFunction12 = (value) => {
        setRotate12(value)
      }
      const increaseDecreaseText3 = (value) => {
        setTextSize(value)
      }
      const increaseDecreaseText4 = (value) => {
        setTextSize2(value)
      }
      const changeTextColor = (value) => {
       setTextColor(value)
      }
      const changeTextColor2 = (value) => {
        setTextColor2(value)
       }
    const showError = () => {
      toast.error(`La imagen es muy pesada 🥺`,{ autoClose: 2000, position:'top-left' })
    }
    const showSuccess = () => {
      toast.success(`Imagen cargada 😎`,{ autoClose: 2000, position:'top-left' })
    }
  return (
    <div>
        {!collageUno ? <Spinner /> 
        :
        (
            collageUno?.template.map(item => {
                return(
                    <Fade>
                      <div className="page-template-flex collages-template">
                         <div className="images">
                           {/* Imagen 1 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg1})`, transform: `rotate(${rotate}deg)`}} 
                            id='1'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img1" accept='image/*' id='img1'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                 showError()
                                }else{
                                 setImg1(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img1">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 1 */}
                                {/* Imagen 2 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg2})`, transform: `rotate(${rotate2}deg)`}} 
                            id='2'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img2" accept='image/*' id='img2'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError()
                                }else{
                                 setImg2(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img2">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 2 */}
                                {/* Imagen 3 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg3})`, transform:`rotate(${rotate3}deg)`}} 
                            id='3'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img3" accept='image/*' id='img3'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError()
                                }else{
                                 setImg3(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img3">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 3 */}
                              
                            </div>
                            <div className="images">
                           {/* Imagen 4 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg4})`, transform: `rotate(${rotate4}deg)`}} 
                            id='4'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img4" accept='image/*' id='img4'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg4(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img4">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 4 */}
                              
                                {/* Imagen 5 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg5})`, transform:`rotate(${rotate5}deg)`}} 
                            id='5'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img5" accept='image/*' id='img5'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg5(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img5">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 5 */}
                                {/* Imagen 6 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg6})`, transform:`rotate(${rotate6}deg)`}} 
                            id='6'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img6" accept='image/*' id='img6'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg6(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img6">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 6 */}
                            </div>
                            <div className="images">
                           {/* Imagen 7 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg7})`, transform:`rotate(${rotate7}deg)`}} 
                            id='7'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img7" accept='image/*' id='img7'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg7(URL.createObjectURL(e.target.files[0]))
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img7">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 7 */}
                              
                                {/* Imagen 8 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg8})`, transform:`rotate(${rotate8}deg)`}} 
                            id='8'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img8" accept='image/*' id='img8'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg8(URL.createObjectURL(e.target.files[0]))
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img8">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 8 */}
                                {/* Imagen 9 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg9})`, transform:`rotate(${rotate9}deg)`}} 
                            id='9'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img9" accept='image/*' id='img9'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg9(URL.createObjectURL(e.target.files[0]))
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img9">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 9 */}
                            </div>
                            <div className="images">
                           {/* Imagen 10 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg10})`, transform: `rotate(${rotate10}deg)`}} 
                            id='10'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img10" accept='image/*' id='img10'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError()
                                }else{
                                 setImg10(URL.createObjectURL(e.target.files[0]))
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img10">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 10 */}
                              
                                {/* Imagen 11 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg11})`, transform: `rotate(${rotate11}deg)`}} 
                            id='11'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img11" accept='image/*' id='img11'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg11(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img11">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 11 */}
                                {/* Imagen 12 */}
                           <div style={{overflow:'hidden'}}>
                            <div className="header-img" 
                            style={{backgroundImage: `url(${getImg12})`, transform: `rotate(${rotate12}deg)`}} 
                            id='12'
                            type='img'
                            onClick={(e) => showRotateBarOnClick(e.target.id)}
                            >
                            <input type="file" name="img12" accept='image/*' id='img12'
                              onChange={(e) => {
                               const fileSize = e.target.files[0].size / 1024 / 1024
                                if(fileSize > 2) {
                                  showError() 
                                }else{
                                 setImg12(URL.createObjectURL(e.target.files[0]));
                                 showSuccess()
                                }

                              }}
                              />      
                             <label for="img12">REEMPLAZAR IMAGEN</label>
                              </div>
                               </div>
                               {/* Fin Imagen 12 */}
                            </div>
                        </div>
                       


                       <div className="collages-text-uno">
                           <div className="span" id='3' onClick={(e) => showTextPanelOnClick(e.target.id)}>
      
                               <EditText 
                               defaultValue={item.span} 
                               id='3' 
                               style={{fontSize:`${textSize}px`, color:`${textColor}`}}
                               onClick={(e) => showTextPanelOnClick(e.target.id)}
                               />
                        
                           </div>
                           <div className="text" id='4' onClick={(e) => showTextPanelOnClick(e.target.id)}>
                               <EditText defaultValue={item.text} 
                               id='4'
                               style={{fontSize:`${textSize2}px`, color:`${textColor2}`}}
                               onClick={(e) => showTextPanelOnClick(e.target.id)}
                               />
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
         rotateFunction4={rotateFunction4}
         rotateFunction5={rotateFunction5}
         rotateFunction6={rotateFunction6}
         rotateFunction7={rotateFunction7}
         rotateFunction8={rotateFunction8}
         rotateFunction9={rotateFunction9}
         rotateFunction10={rotateFunction10}
         rotateFunction11={rotateFunction11}
         rotateFunction12={rotateFunction12}
         increaseDecreaseText3={increaseDecreaseText3}
         increaseDecreaseText4={increaseDecreaseText4}
         changeTextColor={changeTextColor}
         changeTextColor2={changeTextColor2}
        />
        <ToastContainer />
    </div>
  )
}

export default CollagesUno