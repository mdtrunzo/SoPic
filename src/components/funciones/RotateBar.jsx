import Pulse from 'react-reveal/Pulse'
import CloseIcon from '@mui/icons-material/Close'
import { useState, useEffect, Fragment, useContext } from 'react'
import StateContext from '../../context/StateProvider'

function RotateBar({ close }) {
  const [showRotate, setShowRotate] = useState(0)
  const [rotateNumber, setRotateNumber] = useState(0)
  const [rotateNumber2, setRotateNumber2] = useState(0)
  const [rotateNumber3, setRotateNumber3] = useState(0)
  const [rotateNumber4, setRotateNumber4] = useState(0)
  const [rotateNumber5, setRotateNumber5] = useState(0)
  const [rotateNumber6, setRotateNumber6] = useState(0)
  const [rotateNumber7, setRotateNumber7] = useState(0)
  const [rotateNumber8, setRotateNumber8] = useState(0)
  const [rotateNumber9, setRotateNumber9] = useState(0)
  const [rotateNumber10, setRotateNumber10] = useState(0)
  const [rotateNumber11, setRotateNumber11] = useState(0)
  const [rotateNumber12, setRotateNumber12] = useState(0)
  const {
    checkClick,
    rotateFunction,
    rotateFunction2,
    rotateFunction3,
    rotateFunction4,
    rotateFunction5,
    rotateFunction6,
    rotateFunction7,
    rotateFunction8,
    rotateFunction9,
    rotateFunction10,
    rotateFunction11,
    rotateFunction12,
  } = useContext(StateContext)

  useEffect(() => {
    if (checkClick === '1') {
      setShowRotate(1)
    }
    if (checkClick === '2') {
      setShowRotate(2)
    }
    if (checkClick === '3') {
      setShowRotate(3)
    }
    if (checkClick === '4') {
      setShowRotate(4)
    }
    if (checkClick === '5') {
      setShowRotate(5)
    }
    if (checkClick === '6') {
      setShowRotate(6)
    }
    if (checkClick === '7') {
      setShowRotate(7)
    }
    if (checkClick === '8') {
      setShowRotate(8)
    }
    if (checkClick === '9') {
      setShowRotate(9)
    }
    if (checkClick === '10') {
      setShowRotate(10)
    }
    if (checkClick === '11') {
      setShowRotate(11)
    }
    if (checkClick === '12') {
      setShowRotate(12)
    }
  }, [checkClick])

  //Rotate Action
  const rotateAction = (value) => {
    setRotateNumber(value)
  }
  const rotateAction2 = (value) => {
    setRotateNumber2(value)
  }
  const rotateAction3 = (value) => {
    setRotateNumber3(value)
  }
  const rotateAction4 = (value) => {
    setRotateNumber4(value)
  }
  const rotateAction5 = (value) => {
    setRotateNumber5(value)
  }
  const rotateAction6 = (value) => {
    setRotateNumber6(value)
  }
  const rotateAction7 = (value) => {
    setRotateNumber7(value)
  }
  const rotateAction8 = (value) => {
    setRotateNumber8(value)
  }
  const rotateAction9 = (value) => {
    setRotateNumber9(value)
  }
  const rotateAction10 = (value) => {
    setRotateNumber10(value)
  }
  const rotateAction11 = (value) => {
    setRotateNumber11(value)
  }
  const rotateAction12 = (value) => {
    setRotateNumber12(value)
  }

  return (
    <div className="replace-img">
      <Fragment>
        <Pulse>
          {showRotate === 1 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction(e.target.value)
                  rotateAction(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 2 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber2}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction2(e.target.value)
                  rotateAction2(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 3 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber3}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction3(e.target.value)
                  rotateAction3(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 4 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber4}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction4(e.target.value)
                  rotateAction4(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 5 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber5}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction5(e.target.value)
                  rotateAction5(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 6 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber6}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction6(e.target.value)
                  rotateAction6(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 7 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber7}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction7(e.target.value)
                  rotateAction7(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 8 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber8}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction8(e.target.value)
                  rotateAction8(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 9 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber9}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction9(e.target.value)
                  rotateAction9(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 10 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber10}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction10(e.target.value)
                  rotateAction10(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 11 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber11}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction11(e.target.value)
                  rotateAction11(e.target.value)
                }}
              ></input>
            </div>
          ) : showRotate === 12 ? (
            <div className="range-div">
              <div className="range-div-header">
                <p>IZQUIERDA</p>
                <p>{rotateNumber12}°</p>
                <p>DERECHA</p>
              </div>
              <input
                type="range"
                className="range"
                min={-180}
                max={180}
                defaultValue={0}
                onChange={(e) => {
                  rotateFunction12(e.target.value)
                  rotateAction12(e.target.value)
                }}
              ></input>
            </div>
          ) : (
            <p
              style={{ paddingTop: '10px', color: '#785AFF', fontSize: '14px' }}
            >
              Selecciona la imagen <br />
              que deseas rotar
            </p>
          )}
        </Pulse>
      </Fragment>
      <CloseIcon className="close-panel" onClick={close} />
    </div>
  )
}

export default RotateBar
