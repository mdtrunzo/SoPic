import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText, EditTextarea } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import '../kids/kids.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'

function KidsCuatro() {
  const [kidsCuatro, setKidsCuatro] = useState(null)
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
    setKidsCuatro({
      template: [
        {
          id: 10,
          img1: `${img}`,
          name: 'Sofía',
          texto: 'Una madre es capaz de dar todo sin recibir nada. De querer con todo su corazón sin esperar nada a cambio. De invertir todo en un proyecto sin medir la rentabilidad que le aporte su inversión. Una madre sigue teniendo confianza en sus hijos cuando todos los demás lo han perdido.',
          pie: 'Gracias por ser mi mamá',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!kidsCuatro ? (
        <Spinner />
      ) : (
        kidsCuatro?.template.map((item) => {
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

              <div className="kids-cuatro-footer">
                <div className="kids-cuatro-footer-left">
                    <EditText defaultValue={item.name} />
                </div>
                <div className="kids-cuatro-footer-right">
                    <EditTextarea defaultValue={item.texto} />
                    <EditText defaultValue={item.pie} />
                </div>
              </div>
            </Fade>
          )
        })
      )}
    </div>
  )
}

export default KidsCuatro
