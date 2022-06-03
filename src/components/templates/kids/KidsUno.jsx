import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import '../kids/kids.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import StateContext from '../../../context/StateProvider'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms'
import StraightenIcon from '@mui/icons-material/Straighten'
import ScaleIcon from '@mui/icons-material/Scale'

function KidsUno() {
  const [kidsUno, setKidsUno] = useState(null)
  const {
    getImg1,
    rotate,
    showRotateBarOnClick,
    showTextPanelOnClick,
    showError,
    showSuccess,
    setImg1,
    // textSize,
    // textSize2,
    // textColor,
    // textColor2,
  } = useContext(StateContext)

  useEffect(() => {
    setKidsUno({
      template: [
        {
          id: 7,
          img1: `${img}`,
          subtitle: 'HOLA MUNDO!SOY',
          title: 'Martina',
          content: 'LLEGUE EL DIA',
          fecha: '26 ENERO 2021',
          hora: '20:05 HS',
          altura: '46CM',
          peso: '3 KILOS',
        },
      ],
    })
  }, [])

  return (
    <div>
      {!kidsUno ? (
        <Spinner />
      ) : (
        kidsUno?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex kids-template">
                <div className="kids-header">
                  <div
                    className="span"
                    id="3"
                    onClick={(e) => showTextPanelOnClick(e.target.id)}
                  >
                    <EditText
                      defaultValue={item.subtitle}
                      id="3"
                      style={{
                        fontSize: `10px`,
                        color: `#A48B7C`,
                      }}
                      onClick={(e) => showTextPanelOnClick(e.target.id)}
                    />
                  </div>

                  <div
                    className="text"
                    id="4"
                    onClick={(e) => showTextPanelOnClick(e.target.id)}
                  >
                    <EditText
                      defaultValue={item.title}
                      id="4"
                      style={{
                        fontSize: `55px`,
                        color: `#A48B7C`,
                      }}
                      onClick={(e) => showTextPanelOnClick(e.target.id)}
                    />
                  </div>
                </div>
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

              <div className="icons-kids">
                <div className="icon-kids">
                  <FavoriteIcon />
                  <EditText defaultValue={item.content} />
                </div>
                <div className="icon-kids">
                  <CalendarMonthIcon />
                  <EditText defaultValue={item.fecha} />
                </div>
                <div className="icon-kids">
                  <AccessAlarmsIcon />
                  <EditText defaultValue={item.hora} />
                </div>
                <div className="icon-kids">
                  <StraightenIcon />
                  <EditText defaultValue={item.altura} />
                </div>
                <div className="icon-kids">
                  <ScaleIcon />
                  <EditText defaultValue={item.peso} />
                </div>
              </div>
            </Fade>
          )
        })
      )}
    </div>
  )
}

export default KidsUno
