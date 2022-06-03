import Template from './shared/Template'
import JuntosSiempre from './templates/JuntosSiempre'
// import Amistad from './templates/Amistad'
import CollagesUno from './templates/collages/CollagesUno'
import CollagesDos from './templates/collages/CollagesDos'
import CollagesTres from './templates/collages/CollagesTres'
import CollagesCuatro from './templates/collages/CollagesCuatro'
import CollagesCinco from './templates/collages/CollageCinco'
import KidsUno from './templates/kids/KidsUno'
import KidsDos from './templates/kids/KidsDos'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import React, { Fragment } from 'react'
import { useContext } from 'react'
import StateContext from '../context/StateProvider'
import KidsTres from './templates/kids/KidsTres'
import KidsCuatro from './templates/kids/KidsCuatro'
import KidsCinco from './templates/kids/KidsCinco'
import AventuraUno from './templates/aventuras/AventuraUno'
import AventuraDos from './templates/aventuras/AventuraDos'
import Zoom from './Zoom'
// import Nombres from './templates/Nombres'

function Page() {
  const { templateId } = useContext(StateContext)
  return (
    <>
      <TransformWrapper wheel={{ disabled: false, step: 0.1 }}>
        {({ zoomIn, zoomOut, ...rest }) => (
          <div className="tools">
            <Zoom zoomIn={zoomIn} zoomOut={zoomOut} />

            <div className="super-container">
              <TransformComponent>
                <Fragment>
                  <Template>
                    {templateId === 1 ? (
                      <JuntosSiempre />
                    ) : templateId === 2 ? (
                      <CollagesUno />
                    ) : templateId === 3 ? (
                      <CollagesDos />
                    ) : templateId === 4 ? (
                      <CollagesTres />
                    ) : templateId === 5 ? (
                      <CollagesCuatro />
                    ) : templateId === 6 ? (
                      <CollagesCinco />
                    ) : templateId === 7 ? (
                      <KidsUno />
                    ) : templateId === 8 ? (
                      <KidsDos />
                    ) : templateId === 9 ? (
                      <KidsTres />
                    ) : templateId === 10 ? (
                      <KidsCuatro />
                    ) : templateId === 11 ? (
                      <KidsCinco />
                    ) : templateId === 12 ? (
                      <AventuraUno />
                    ) : templateId === 13 ? (
                      <AventuraDos />
                    ) : (
                      ''
                    )}
                  </Template>
                </Fragment>
              </TransformComponent>
            </div>
          </div>
        )}
      </TransformWrapper>
    </>
  )
}

export default Page
