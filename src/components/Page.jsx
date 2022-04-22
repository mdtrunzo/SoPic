import Template from './shared/Template'
import JuntosSiempre from './templates/JuntosSiempre'
// import Amistad from './templates/Amistad'
import CollagesUno from './templates/collages/CollagesUno';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from 'react';
// import Nombres from './templates/Nombres'

function Page({id}) {
    return (
        <>
        {/* <TransformWrapper wheel={{disabled:false}}>  
          <TransformComponent> */}
        <Template>
         {(id === 2 ) ? <JuntosSiempre /> : <CollagesUno />}
        </Template>
        {/* </TransformComponent>
        </TransformWrapper> */}
        </>
    )
}


export default Page
