import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import '../aventuras/aventura.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'

function AventuraUno() {
  const [aventuraUno, setAventuraUno] = useState(null)
  const {
    getImg1,
    rotate,
    showRotateBarOnClick,
    // showTextPanelOnClick,
    showError,
    showSuccess,
    showErrorLess,
    setImg1,
  } = useContext(StateContext)

  useEffect(() => {
    setAventuraUno({
      template: [
        {
          id: 11,
          img1: `${img}`,
          title: 'NEW YORK',
          subtitle: 'nustro primer viaje',
          fecha: '22 ENERO 2021',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!aventuraUno ? (
        <Spinner />
      ) : (
        aventuraUno?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex aventura-template">
                <div className="images">
                  {/* Imagen 1 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img aventura-img"
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
                </div>
              </div>

              <div className="aventura-content">
                <EditText defaultValue={item.title} />
                <EditText defaultValue={item.subtitle} />
                <EditText defaultValue={item.fecha} />
              </div>
            </Fade>
          )
        })
      )}
    </div>
  )
}

export default AventuraUno
