import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faSyncAlt, faFont, faPaintBrush} from '@fortawesome/free-solid-svg-icons';
import RotateBar from './RotateBar';
import ReplaceImg from './ReplaceImg';
import LetterSize from './LetterSize';
import ColorSelect from './ColorSelect';

function Panel() {
  const [rotate, showRotateBar] = useState('hidden')
  const [replace, showReplaceBar] = useState('hidden')
  const [letter, showLetterSizeBar] = useState('hidden')
  const [color, showColorBar] = useState('hidden')

  const showRotate = () => {
    showRotateBar('visible')
    showReplaceBar('hidden')
    showLetterSizeBar('hidden')
    showColorBar('hidden')
  }
  const showReplace = () => {
    showReplaceBar('visible')
    showRotateBar('hidden')
    showLetterSizeBar('hidden')
    showColorBar('hidden')
  }
  const showLetterSize = () => {
    showLetterSizeBar('visible')
    showReplaceBar('hidden')
    showRotateBar('hidden')
    showColorBar('hidden')
  }
  const showColor = () => {
    showColorBar('visible')
    showLetterSizeBar('hidden')
    showReplaceBar('hidden')
    showRotateBar('hidden')
  }
        return (       
            <div className="footer">
                <nav className="navbar-footer">
                <ul>
                  <div className="navbar-footer-top">
                    <div className="iconos-menu" onClick={showReplace}>
                      <FontAwesomeIcon icon={faImages} />
                      <li>REEMPLAZAR IMAGEN</li>
                    </div>
                    <div className="iconos-menu" onClick={showRotate}>
                      <FontAwesomeIcon icon={faSyncAlt}/>
                      <li>ROTAR IMAGEN</li>
                    </div>
                    </div>
                    <div className="navbar-footer-bottom">
                    <div className="iconos-menu" onClick={showLetterSize}>
                      <FontAwesomeIcon icon={faFont}/>
                      <li>TAMAÑO DE LETRA</li>
                    </div>
                    <div className="iconos-menu" onClick={showColor}>
                      <FontAwesomeIcon icon={faPaintBrush}/>
                      <li>COLOR DE LETRA</li>
                    </div>
                    </div>
                </ul>
                </nav>
                <div className="navbar-footer-2">
                <ul>
                  <li style={{visibility: replace}}><ReplaceImg  /></li>
                  <li style={{visibility: rotate}} ><RotateBar /></li>
                  <li style={{visibility: letter}}><LetterSize /></li>
                  <li style={{visibility: color}}><ColorSelect /></li>
                </ul>
                </div>
            </div>

        )
    }

export default Panel;