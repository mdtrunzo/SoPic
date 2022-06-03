import { useState, useEffect, useContext } from 'react'
import '../collages/collages.css'
import { EditText } from 'react-edit-text'
import Fade from 'react-reveal/Fade'
import 'react-edit-text/dist/index.css'
import '../kids/kids.css'
import img from '../../assets/Fondos_20x30cm.jpg'
import Spinner from '../../Spinner'
import MoveImage from '../../MoveImage'
import StateContext from '../../../context/StateProvider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded'


function KidsCinco() {
  const [kidsCinco, setKidsCinco] = useState(null)
  const {
    getImg1,
    rotate,
    showRotateBarOnClick,
    showTextPanelOnClick,
    showError,
    showSuccess,
    showErrorLess,
    setImg1,
    imgZoom,
    textSize,
    textColor
  } = useContext(StateContext)

  useEffect(() => {
    setKidsCinco({
      template: [
        {
          id: 10,
          img1: `${img}`,
          song: 'CANCIÓN DE CUNA',
          band: 'LOS PIOJOS',
        },
      ],
    })
  }, [textSize])

  return (
    <div>
      {!kidsCinco ? (
        <Spinner />
      ) : (
        kidsCinco?.template.map((item) => {
          return (
            <Fade>
              <div className="page-template-flex kids-template">
                <div className="spotify-header">
                  <div className="spotify-header-top">
                    <KeyboardArrowDownIcon />
                    <div className="song-name" id='3' onClick={(e) => showTextPanelOnClick(e.target.id)}>
                      <EditText id='3' style={{fontSize:`${textSize}px`, color:textColor}} defaultValue={item.song} onClick={(e) => showTextPanelOnClick(e.target.id)}/>
                    </div>
                    <MoreVertIcon />
                  </div>
                  <div className="spotify-header-bottom">
                    <EditText defaultValue={item.band} />
                  </div>
                </div>
                <div className="images">
                  {/* Imagen 1 */}
                  <div style={{ overflow: 'hidden' }}>
                    <div
                      className="header-img kids-img"
                      style={{
                        backgroundImage: `url(${getImg1})`,
                        backgroundSize: `${imgZoom}%`,
                        transform: `rotate(${rotate}deg)`,
                      }}
                      id="1"
                      type="img"
                      onClick={(e) => showRotateBarOnClick(e.target.id)}
                    >
                      <MoveImage />
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

              <div className="spotify-footer">
                <div className="input-range-spotify"></div>
                <div className="reproductor">
                  <FavoriteIcon />
                  <FastRewindIcon />
                  <PauseCircleOutlineIcon />
                  <FastForwardIcon />
                  <ShuffleRoundedIcon />
                </div>
              </div>
            </Fade>
          )
        })
      )}
    </div>
  )
}

export default KidsCinco
