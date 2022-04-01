import CollectionsIcon from '@mui/icons-material/Collections';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import BrushIcon from '@mui/icons-material/Brush';
import RotateBar from './funciones/RotateBar';
import LetterSize from './funciones/LetterSize'
import ReplaceImg from './funciones/ReplaceImg'
import ColorSelect from './funciones/ColorSelect'
import { useState } from 'react'

function Panel({}) {
  const [displayNavbar, setDisplayNavbar] = useState('block')
  const [showReplaceImg, setShowReplaceImg] = useState('none')
  const [showRotateImg, setShowRotateImg] = useState('none')
  const [showIncreaseImg, setShowIncreaseImg] = useState('none')
  const [showColorImg, setShowColorImg] = useState('none')

  const showReplacePanel = () => {
    setShowReplaceImg('block')
    setShowIncreaseImg('none')
    setShowRotateImg('none')
    setShowColorImg('none')
  }
  const showRotatePanel = () => {
    setShowRotateImg('block')
    setShowIncreaseImg('none')
    setShowReplaceImg('none')
    setShowColorImg('none')
  }
  const showIncreasePanel = () => {
    setShowIncreaseImg('block')
    setShowReplaceImg('none')
    setShowRotateImg('none')
    setShowColorImg('none')
  }
  const showColorPanel = () => {
    setShowColorImg('block')
    setShowIncreaseImg('none')
    setShowReplaceImg('none')
    setShowRotateImg('none')
  }
  const closePanel = () => {
    setShowReplaceImg('none')
    setShowRotateImg('none')
    setShowIncreaseImg('none')
    setShowColorImg('none')
    setDisplayNavbar('block')
  }
  
        return (       
            <div className="footer">
                <nav className="navbar-footer" >
                <ul style={{display: displayNavbar}}>
                  <div className="navbar-footer-top">
                    <div className='iconos-menu' onClick={showReplacePanel}>
                     <CollectionsIcon />
                      <li>REEMPLAZAR IMAGEN</li>
                    </div>
                    <div className='iconos-menu' onClick={showRotatePanel}>
                     <AutorenewIcon />
                      <li>ROTAR IMAGEN</li>
                    </div>
                    </div>
                    <div className="navbar-footer-bottom" >
                    <div className="iconos-menu" onClick={showIncreasePanel}>
                      <TextIncreaseIcon />
                      <li>TAMAÑO DE LETRA</li>
                    </div>
                    <div className="iconos-menu" onClick={showColorPanel}>
                      <BrushIcon />
                      <li>COLOR DE LETRA</li>
                    </div>
                    </div>
                </ul>
                <div className="functions-bar" >
                  <div style={{display:showRotateImg}}>
                    <RotateBar close={closePanel}/>
                 </div>
                 <div style={{display:showIncreaseImg}}>
                    <LetterSize close={closePanel}/>
                 </div>
                 <div style={{display: showReplaceImg}}>
                    <ReplaceImg close={closePanel}/>
                 </div>
                 <div style={{display:showColorImg}}>
                    <ColorSelect close={closePanel}/>
                 </div>
                </div>
                </nav>
            </div>

        )
    }

export default Panel;