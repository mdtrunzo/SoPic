import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import '../kids/kids.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'

function KidsTres() {
  const [kidsTres, setKidsTres] = useState(null)
  const {
    getImg1,
    rotate,
    showRotateBarOnClick,
    // showTextPanelOnClick,
    showError,
    showSuccess,
    setImg1,
  } = useContext(StateContext)

  useEffect(() => {
    setKidsTres({
      template: [
        {
          id: 9,
          img1: `${img}`,
          name: 'Valentina',
          apellido: 'BLANCO',
          fecha: '08 - 04 - 21',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!kidsTres ? (
        <Spinner />
      ) : (
        kidsTres?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex kids-template">
                <div className="images">
                  {/* Imagen 1 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img kids-img"
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
                  {/* Fin Imagen 1 */}
                </div>
              </div>

              <div className="kids-tres-footer">
                <div className="kids-tres-footer-body">
                  <div className="kids-tres-footer-body-header">
                    <EditText defaultValue={item.name} />
                    <EditText defaultValue={item.apellido} />
                  </div>
                  <div className="kids-tres-footer-body-footer">
                    <EditText defaultValue={item.fecha} />
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

export default KidsTres
