import img1 from '../assets/plantillas/amistad/1-a.png'
import Fade from 'react-reveal/Fade'

function Amistad() {
    return (
        <div>
              <div className="page-template-flex">
            <div className="header-img">
                <Fade>
                <img src={img1} alt="header" width={450}/>
                </Fade>
            </div>
            <Fade>         
                <div className="texto texto-amistad">
                    <h2>amistad</h2>
                    <h4>[fæmli] noun</h4>
                    <p>Construída sobre la base de la reprocidad y el trato asiduo. Valores fundamentales en una amistad
                        son la lealtad, el amor, la solidaridad, la incondicionalidad, la sinceridad y el compromiso.
                    </p>
                </div>
            </Fade>
            </div>
        </div>
    )
}

export default Amistad
