import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'

function CollagesDos() {
  const [collageDos, setCollageDos] = useState(null)
  const {
    getImg1,
    getImg2,
    getImg3,
    getImg4,
    setImg1,
    setImg2,
    setImg3,
    setImg4,
    rotate,
    rotate2,
    rotate3,
    rotate4,
    showRotateBarOnClick,
    showError,
    showSuccess
  } = useContext(StateContext)

  useEffect(() => {
    setCollageDos({
      template: [
        {
          id: 3,
          img1: `${img}`,
          img2: `${img}`,
          img3: `${img}`,
          img4: `${img}`,
          span: 'Los pequeños momentos que pasamos en familia,se convertirán mañana en preciosos recuerdos',
          text: 'Gracias por ser nuestro papá',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!collageDos ? (
        <Spinner />
      ) : (
        collageDos?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex collages-template">
                <div className="header-section-collage-template2">
                  <div className="header-section-one">
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
                            const fileSize =
                              e.target.files[0].size / 1024 / 1024
                            if (fileSize > 2) {
                              showError()
                            } else {
                              setImg1(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                        />
                        <label for="img1">REEMPLAZAR IMAGEN</label>
                      </div>
                    </div>
                  </div>

                  <div className="header-section-two">
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
                            const fileSize =
                              e.target.files[0].size / 1024 / 1024
                            if (fileSize > 2) {
                              showError()
                            } else {
                              setImg2(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                        />
                        <label for="img2">REEMPLAZAR IMAGEN</label>
                      </div>
                    </div>

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
                            const fileSize =
                              e.target.files[0].size / 1024 / 1024
                            if (fileSize > 2) {
                              showError()
                            } else {
                              setImg3(URL.createObjectURL(e.target.files[0]))
                              showSuccess()
                            }
                          }}
                        />
                        <label for="img3">REEMPLAZAR IMAGEN</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-section-collage-template2">
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
                          if (fileSize > 2) {
                            showError()
                          } else {
                            setImg4(URL.createObjectURL(e.target.files[0]))
                            showSuccess()
                          }
                        }}
                      />
                      <label for="img4">REEMPLAZAR IMAGEN</label>
                    </div>
                  </div>
                </div>

                <div className="collages-text-dos">
                  <div className="span" id="1">
                    <EditText
                      defaultValue={item.span}
                      id="1"
                    />
                  </div>
                  <div className="text" id="6">
                    <EditText defaultValue={item.text} id="4" />
                  </div>
                </div>
              </div>
            </Fade>
          )
        })
      )}
    </div>
  )
}

export default CollagesDos
