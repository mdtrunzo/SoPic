import { useState, useEffect, Fragment, useContext } from 'react'
import Pulse from 'react-reveal/Pulse'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import StateContext from '../../context/StateProvider'

function ColorSelect({ close }) {
  const colors = [
    '#785AFF',
    '#FF99CC',
    '#A2F451',
    '#3CFAC6',
    '#DD55F3',
    '#DCF158',
    '#F18971',
    '#000000',
  ]
  //States
  const [showIncrease, setShowIncrease] = useState(0)
  const [letterSizeNumber, setLetterSizeNumber] = useState(30)
  const [letterSizeNumber2, setLetterSizeNumber2] = useState(8)
  const [letterSizeNumber3, setLetterSizeNumber3] = useState(22)
  const [letterSizeNumber4, setLetterSizeNumber4] = useState(16)
  const {
    checkTextClick,
    increaseDecreaseText,
    increaseDecreaseText2,
    increaseDecreaseText3,
    increaseDecreaseText4,
    changeTextColor,
    changeTextColor2,
  } = useContext(StateContext)
  //Click Detection
  useEffect(() => {
    if (checkTextClick === '1') {
      setShowIncrease(1)
    }
    if (checkTextClick === '2') {
      setShowIncrease(2)
    }
    if (checkTextClick === '3') {
      setShowIncrease(3)
    }
    if (checkTextClick === '4') {
      setShowIncrease(4)
    }
  }, [checkTextClick])

  //Functions
  const decreaseLetterNumber = () => {
    if (letterSizeNumber === 0) {
      return
    } else {
      setLetterSizeNumber(letterSizeNumber - 1)
    }
  }
  const increaseLetterNumber = () => {
    setLetterSizeNumber(letterSizeNumber + 1)
  }

  const decreaseLetterNumber2 = () => {
    if (letterSizeNumber2 === 0) {
      return
    } else {
      setLetterSizeNumber2(letterSizeNumber2 - 1)
    }
  }
  const increaseLetterNumber2 = () => {
    setLetterSizeNumber2(letterSizeNumber2 + 1)
  }
  const decreaseLetterNumber3 = () => {
    if (letterSizeNumber3 === 0) {
      return
    } else {
      setLetterSizeNumber3(letterSizeNumber3 - 1)
    }
  }
  const increaseLetterNumber3 = () => {
    setLetterSizeNumber3(letterSizeNumber3 + 1)
  }
  const decreaseLetterNumber4 = () => {
    if (letterSizeNumber4 === 0) {
      return
    } else {
      setLetterSizeNumber4(letterSizeNumber4 - 1)
    }
  }
  const increaseLetterNumber4 = () => {
    setLetterSizeNumber4(letterSizeNumber4 + 1)
  }

 
  return (
    <div className="replace-img increase-panel">
      <Fragment>
        <Pulse>
          {showIncrease === 1 ? (
            <>
              <div className="letter-size">
                <RemoveIcon onClick={decreaseLetterNumber} />
                {increaseDecreaseText(letterSizeNumber)}
                <p>{letterSizeNumber}</p>
                <AddIcon onClick={increaseLetterNumber} />
              </div>
              <div className="color-select">
                <div className="paleta-grid">
                  {colors.map((color, index) => {
                    return (
                      <div
                        key={index}
                        id={color}
                        style={{ background: `${color}` }}
                        onClick={(e) => changeTextColor(e.target.id)}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : showIncrease === 2 ? (
            <>
              <div className="letter-size">
                <RemoveIcon onClick={decreaseLetterNumber2} />
                {increaseDecreaseText2(letterSizeNumber2)}
                <p>{letterSizeNumber2}</p>
                <AddIcon onClick={increaseLetterNumber2} />
              </div>
              <div className="color-select">
                <div className="paleta-grid">
                  {colors.map((color) => {
                    return (
                      <div
                        id={color}
                        style={{ background: `${color}` }}
                        onClick={(e) => changeTextColor2(e.target.id)}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : showIncrease === 3 ? (
            <>
              <div className="letter-size">
                <RemoveIcon onClick={decreaseLetterNumber3} />
                {increaseDecreaseText3(letterSizeNumber3)}
                <p>{letterSizeNumber3}</p>
                <AddIcon onClick={increaseLetterNumber3} />
              </div>
              <div className="color-select">
                <div className="paleta-grid">
                  {colors.map((color) => {
                    return (
                      <div
                        id={color}
                        style={{ background: `${color}` }}
                        onClick={(e) => changeTextColor(e.target.id)}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : showIncrease === 4 ? (
            <>
              <div className="letter-size">
                <RemoveIcon onClick={decreaseLetterNumber4} />
                {increaseDecreaseText4(letterSizeNumber4)}
                <p>{letterSizeNumber4}</p>
                <AddIcon onClick={increaseLetterNumber4} />
              </div>
              <div className="color-select">
                <div className="paleta-grid">
                  {colors.map((color) => {
                    return (
                      <div
                        id={color}
                        style={{ background: `${color}` }}
                        onClick={(e) => changeTextColor2(e.target.id)}
                      ></div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            <p
              style={{ paddingTop: '10px', color: '#785AFF', fontSize: '14px' }}
            >
              Selecciona el texto <br />
              que deseas modificar
            </p>
          )}
        </Pulse>
      </Fragment>
      <CloseIcon className="close-panel" onClick={close} />
    </div>
  )
}

export default ColorSelect
