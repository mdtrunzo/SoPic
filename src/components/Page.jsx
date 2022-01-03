import Template from './shared/Template'
import JuntosSiempre from './templates/JuntosSiempre'
import Amistad from './templates/Amistad'
import Nombres from './templates/Nombres'

function Page(props) {

    return (
        <>
        <Template>
         {(props.id === 1) ? <JuntosSiempre /> : <Amistad />}
        </Template>
        </>
    )
}

export default Page
