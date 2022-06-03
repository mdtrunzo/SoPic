import CollectionsIcon from '@mui/icons-material/Collections'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import BrushIcon from '@mui/icons-material/Brush'
import RotateBar from './funciones/RotateBar'
import ReplaceImg from './funciones/ReplaceImg'
import ColorSelect from './funciones/ColorSelect'
import { useState, useEffect, useContext } from 'react'
import StateContext from '../context/StateProvider'

function Panel() {
  const [displayNavbar, setDisplayNavbar] = useState('block')
  const [showReplaceImg, setShowReplaceImg] = useState('none')
  const [showRotateImg, setShowRotateImg] = useState('none')
  const [showIncreaseImg, setShowIncreaseImg] = useState('none')
  const {
    checkClick,
    checkTextClick,
    increaseDecreaseText,
    increaseDecreaseText2,
  } = useContext(StateContext)

  const showReplacePanel = () => {
    setShowReplaceImg('block')
    setShowIncreaseImg('none')
    setShowRotateImg('none')
  }
  const showRotatePanel = () => {
    setShowRotateImg('block')
    setShowIncreaseImg('none')
    setShowReplaceImg('none')
  }
  const showIncreasePanel = () => {
    setShowIncreaseImg('block')
    setShowReplaceImg('none')
    setShowRotateImg('none')
  }
  const showColorPanel = () => {
    setShowIncreaseImg('none')
    setShowReplaceImg('none')
    setShowRotateImg('none')
  }
  const closePanel = () => {
    setShowReplaceImg('none')
    setShowRotateImg('none')
    setShowIncreaseImg('none')
    setDisplayNavbar('block')
  }

  useEffect(() => {
    if (checkClick) {
      showRotatePanel()
    }
  }, [checkClick])

  useEffect(() => {
    if (checkTextClick) {
      showColorPanel()
    }
  }, [checkTextClick])

  return (
    <div className="footer">
      <nav className="navbar-footer navbar-footer-desktop">
        <ul style={{ display: displayNavbar }}>
          <div className="navbar-footer-top">
            <div className="iconos-menu" onClick={showReplacePanel}>
              <CollectionsIcon />
              <li>REEMPLAZAR IMAGEN</li>
            </div>
            <div className="iconos-menu" onClick={showRotatePanel}>
              <AutorenewIcon />
              <li>ROTAR IMAGEN</li>
            </div>
          </div>
          <div className="navbar-footer-bottom">
            <div className="iconos-menu" onClick={showIncreasePanel}>
              <TextIncreaseIcon />
              <li>TAMAÑO DE LETRA</li>
            </div>
            <div className="iconos-menu" onClick={showIncreasePanel}>
              <BrushIcon />
              <li>COLOR DE LETRA</li>
            </div>
          </div>
        </ul>
        <div className="functions-bar">
          <div style={{ display: showReplaceImg }}>
            <ReplaceImg close={closePanel} />
          </div>
          <div style={{ display: showRotateImg }}>
            <RotateBar
              close={closePanel}
            />
          </div>
          <div style={{ display: showIncreaseImg }}>
            <ColorSelect
              close={closePanel}
              increaseDecreaseText={increaseDecreaseText}
              increaseDecreaseText2={increaseDecreaseText2}
            />
          </div>
        </div>
      </nav>

      <nav className="navbar-footer navbar-footer-mobile">
        <ul style={{ display: displayNavbar }}>
          <div className="navbar-footer-top">
            <div className="iconos-menu" onClick={showReplacePanel}>
              <CollectionsIcon />
              <li>REEMPLAZAR<br /> IMAGEN</li>
            </div>
            <div className="iconos-menu" onClick={showRotatePanel}>
              <AutorenewIcon />
              <li>ROTAR<br /> IMAGEN</li>
            </div>
            <div className="iconos-menu" onClick={showIncreasePanel}>
              <TextIncreaseIcon />
              <li>TAMAÑO <br /> LETRA</li>
            </div>
            <div className="iconos-menu" onClick={showIncreasePanel}>
              <BrushIcon />
              <li>COLOR <br /> LETRA</li>
            </div>
          </div>
        </ul>
        <div className="functions-bar">
          <div style={{ display: showReplaceImg }}>
            <ReplaceImg close={closePanel} />
          </div>
          <div style={{ display: showRotateImg }}>
            <RotateBar
              close={closePanel}
            />
          </div>
          <div style={{ display: showIncreaseImg }}>
            <ColorSelect
              close={closePanel}
              increaseDecreaseText={increaseDecreaseText}
              increaseDecreaseText2={increaseDecreaseText2}
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Panel
