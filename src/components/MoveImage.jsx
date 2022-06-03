import { AddCircle, RemoveCircle } from '@mui/icons-material'
import {useContext} from 'react'
import StateContext from '../context/StateProvider'

function MoveImage() {
    const {zoomInImage, zoomOutImage} = useContext(StateContext)
  return (
    <div className="move-image">
      <RemoveCircle onClick={zoomInImage} />
      <AddCircle onClick={zoomOutImage} />
    </div>
  )
}

export default MoveImage
