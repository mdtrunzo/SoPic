// import { createContext, useReducer } from 'react'

// export const StateContext = createContext()

// const handleChange = () => {}

// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={
//       useReducer(reducer, initialState)

//       }>
//       {children}
//     </StateContext.Provider>
// )
import { createContext, useState } from 'react'
import img from '../components/assets/Fondos_20x30cm.jpg'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [templateId] = useState(11)
  const [getImg1, setImg1] = useState(img)
  const [getImg2, setImg2] = useState(img)
  const [getImg3, setImg3] = useState(img)
  const [getImg4, setImg4] = useState(img)
  const [getImg5, setImg5] = useState(img)
  const [getImg6, setImg6] = useState(img)
  const [getImg7, setImg7] = useState(img)
  const [getImg8, setImg8] = useState(img)
  const [getImg9, setImg9] = useState(img)
  const [getImg10, setImg10] = useState(img)
  const [getImg11, setImg11] = useState(img)
  const [getImg12, setImg12] = useState(img)
  const [checkClick, setCheckClick] = useState('')
  const [checkTextClick, setCheckTextClick] = useState('')
  const [rotate, setRotate] = useState(0)
  const [rotate2, setRotate2] = useState(0)
  const [rotate3, setRotate3] = useState(0)
  const [rotate4, setRotate4] = useState(0)
  const [rotate5, setRotate5] = useState(0)
  const [rotate6, setRotate6] = useState(0)
  const [rotate7, setRotate7] = useState(0)
  const [rotate8, setRotate8] = useState(0)
  const [rotate9, setRotate9] = useState(0)
  const [rotate10, setRotate10] = useState(0)
  const [rotate11, setRotate11] = useState(0)
  const [rotate12, setRotate12] = useState(0)
  const [textSize, setTextSize] = useState('22')
  const [textColor, setTextColor] = useState('#000000')
  const [textSize2, setTextSize2] = useState('16')
  const [textColor2, setTextColor2] = useState('#000000')
  const [imgZoom, setImgZoom] = useState(100)


  //Functions
  const showRotateBarOnClick = (id) => {
    setCheckClick(id)
  }
  const rotateFunction = (value) => {
    setRotate(value)
  }
  const rotateFunction2 = (value) => {
    setRotate2(value)
  }
  const rotateFunction3 = (value) => {
    setRotate3(value)
  }
  const rotateFunction4 = (value) => {
    setRotate4(value)
  }
  const rotateFunction5 = (value) => {
    setRotate5(value)
  }
  const rotateFunction6 = (value) => {
    setRotate6(value)
  }
  const rotateFunction7 = (value) => {
    setRotate7(value)
  }
  const rotateFunction8 = (value) => {
    setRotate8(value)
  }
  const rotateFunction9 = (value) => {
    setRotate9(value)
  }
  const rotateFunction10 = (value) => {
    setRotate10(value)
  }
  const rotateFunction11 = (value) => {
    setRotate11(value)
  }
  const rotateFunction12 = (value) => {
    setRotate12(value)
  }
  const increaseDecreaseText3 = (value) => {
    setTextSize(value)
  }
  const increaseDecreaseText4 = (value) => {
    setTextSize2(value)
  }
  const changeTextColor = (value) => {
    setTextColor(value)
  }
  const changeTextColor2 = (value) => {
    setTextColor2(value)
  }
  const showTextPanelOnClick = (id) => {
    setCheckTextClick(id)
  }
  const showError = () => {
    toast.error(`No aceptamos más de 10 mb 🥺`, {
      autoClose: 2000,
      position: 'top-left',
    })
  }
  const showSuccess = () => {
    toast.success(`Imagen cargada 😎`, {
      autoClose: 2000,
      position: 'top-left',
    })
  }
  const showErrorLess = () => {
    toast.error(`No aceptamos menos de 2 mb 🥺`, {
      autoClose: 2000,
      position: 'top-left',
    })
  }

  const zoomOutImage = () => {
    if(imgZoom < 173) {
      setImgZoom(imgZoom * 1.2);
    }
  }
  
  const zoomInImage = () => {
    if(imgZoom > 100) {
      setImgZoom(imgZoom / 1.2)
    }
  }

  return (
    <StateContext.Provider
      value={{
        templateId,
        getImg1,
        getImg2,
        getImg3,
        getImg4,
        getImg5,
        getImg6,
        getImg7,
        getImg8,
        getImg9,
        getImg10,
        getImg11,
        getImg12,
        checkClick,
        setCheckClick,
        checkTextClick,
        setCheckTextClick,
        rotate,
        rotate2,
        rotate3,
        rotate4,
        rotate5,
        rotate6,
        rotate7,
        rotate8,
        rotate9,
        rotate10,
        rotate11,
        rotate12,
        setImg1,
        setImg2,
        setImg3,
        setImg4,
        setImg5,
        setImg6,
        setImg7,
        setImg8,
        setImg9,
        setImg10,
        setImg11,
        setImg12,
        showError,
        showErrorLess,
        showRotateBarOnClick,
        showSuccess,
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
        textSize,
        textColor,
        textColor2,
        textSize2,
        increaseDecreaseText3,
        increaseDecreaseText4,
        changeTextColor,
        changeTextColor2,
        showTextPanelOnClick,
        zoomInImage,
        zoomOutImage,
        imgZoom,
        setImgZoom
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
