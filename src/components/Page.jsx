import Template from './shared/Template'
import JuntosSiempre from './templates/JuntosSiempre'
import Amistad from './templates/Amistad'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React from 'react';
// import Nombres from './templates/Nombres'

function Page({id}) {
    return (
        <>
        {/* <TransformWrapper wheel={{disabled:true}}>  
          <TransformComponent> */}
        <Template>
         {(id === 1) ? <JuntosSiempre /> : <Amistad />}
        </Template>
        {/* </TransformComponent>
        </TransformWrapper> */}
        </>
    )
}


export default Page
