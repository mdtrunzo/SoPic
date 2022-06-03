import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'

function AventuraDos() {
  const [aventuraDos, setAventuraDos] = useState(null)
  const {
    getImg1,
    getImg2,
    getImg3,
    getImg4,
    getImg5,
    getImg6,
    getImg7,
    getImg8,
    getImg9,
    getImg10,
    getImg11,
    getImg12,
    rotate,
    rotate2,
    rotate3,
    rotate4,
    rotate5,
    rotate6,
    rotate7,
    rotate8,
    rotate9,
    rotate10,
    rotate11,
    rotate12,
    showRotateBarOnClick,
    showTextPanelOnClick,
    showError,
    showSuccess,
    showErrorLess,
    setImg1,
    setImg2,
    setImg3,
    setImg4,
    setImg5,
    setImg6,
    setImg7,
    setImg8,
    setImg9,
    setImg10,
    setImg11,
    setImg12,
    textSize,
    textSize2,
    textColor,
    textColor2,
  } = useContext(StateContext)

  useEffect(() => {
    setAventuraDos({
      template: [
        {
          id: 2,
          img1: `${img}`,
          img2: `${img}`,
          img3: `${img}`,
          img4: `${img}`,
          img5: `${img}`,
          img6: `${img}`,
          img7: `${img}`,
          img8: `${img}`,
          img9: `${img}`,
          img10: `${img}`,
          img11: `${img}`,
          img12: `${img}`,
          span: 'NUESTRO LUGAR EN EL MUNDO',
          text: 'Juntos Siempre',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!aventuraDos ? (
        <Spinner />
      ) : (
        aventuraDos?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex collages-template">
                <div className="images">
                  {/* Imagen 1 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg1})`,
                        transform: `rotate(${rotate}deg)`,
                      }}
                      id="1"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img1"
                        accept="image/*"
                        id="img1"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg1(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                      />
                      <label for="img1">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                  {/* Fin Imagen 1 */}
                  {/* Imagen 2 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg2})`,
                        transform: `rotate(${rotate2}deg)`,
                      }}
                      id="2"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img2"
                        accept="image/*"
                        id="img2"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg2(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                      />
                      <label for="img2">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                  {/* Fin Imagen 2 */}
                  {/* Imagen 3 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg3})`,
                        transform: `rotate(${rotate3}deg)`,
                      }}
                      id="3"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img3"
                        accept="image/*"
                        id="img3"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg3(URL.createObjectURL(e.target.files[0]))
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg4})`,
                        transform: `rotate(${rotate4}deg)`,
                      }}
                      id="4"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img4"
                        accept="image/*"
                        id="img4"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg4(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                      />
                      <label for="img4">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                  {/* Fin Imagen 4 */}

                  {/* Imagen 5 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg5})`,
                        transform: `rotate(${rotate5}deg)`,
                      }}
                      id="5"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img5"
                        accept="image/*"
                        id="img5"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg5(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                      />
                      <label for="img5">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                  {/* Fin Imagen 5 */}
                  {/* Imagen 6 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg6})`,
                        transform: `rotate(${rotate6}deg)`,
                      }}
                      id="6"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img6"
                        accept="image/*"
                        id="img6"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg6(URL.createObjectURL(e.target.files[0]))
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg7})`,
                        transform: `rotate(${rotate7}deg)`,
                      }}
                      id="7"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img7"
                        accept="image/*"
                        id="img7"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg8})`,
                        transform: `rotate(${rotate8}deg)`,
                      }}
                      id="8"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img8"
                        accept="image/*"
                        id="img8"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg9})`,
                        transform: `rotate(${rotate9}deg)`,
                      }}
                      id="9"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img9"
                        accept="image/*"
                        id="img9"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg10})`,
                        transform: `rotate(${rotate10}deg)`,
                      }}
                      id="10"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img10"
                        accept="image/*"
                        id="img10"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
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
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg11})`,
                        transform: `rotate(${rotate11}deg)`,
                      }}
                      id="11"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img11"
                        accept="image/*"
                        id="img11"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg11(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                      />
                      <label for="img11">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                  {/* Fin Imagen 11 */}
                  {/* Imagen 12 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img"
                      style={{
                        backgroundImage: `url(${getImg12})`,
                        transform: `rotate(${rotate12}deg)`,
                      }}
                      id="12"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <input
                        type="file"
                        name="img12"
                        accept="image/*"
                        id="img12"
                        onChange={(e) => {
                            const fileSize = e.target.files[0].size / 1024 / 1024
                            if (fileSize < 2) {
                              showErrorLess()
                              return
                            } 
                            if (fileSize > 10) {
                              showError()
                              return
                            } else {
                              setImg12(URL.createObjectURL(e.target.files[0]))
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

              <div className="aventura-dos-content">
                <div
                  className="span"
                  id="3"
                  onClick={(e) => showTextPanelOnClick(e.target.id)}
                >
                  <EditText
                    defaultValue={item.span}
                    id="3"
                    style={{ fontSize: `${textSize}px`, color: `${textColor}` }}
                    onClick={(e) => showTextPanelOnClick(e.target.id)}
                  />
                </div>
                <div
                  className="text"
                  id="4"
                  onClick={(e) => showTextPanelOnClick(e.target.id)}
                >
                  <EditText
                    defaultValue={item.text}
                    id="4"
                    style={{
                      fontSize: `${textSize2}px`,
                      color: `${textColor2}`,
                    }}
                    onClick={(e) => showTextPanelOnClick(e.target.id)}
                  />
                </div>
              </div>
            </Fade>
          )
        })
      )}
   

    </div>
  )
}

export default AventuraDos

