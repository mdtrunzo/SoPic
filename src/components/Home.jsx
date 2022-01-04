import {useState} from 'react'
import { Link } from 'react-router-dom'
import img1 from '../components/assets/plantillas/home/1.jpg'
import img2 from '../components/assets/plantillas/home/2.jpg'
import img3 from '../components/assets/plantillas/home/3.jpg'
import img4 from '../components/assets/plantillas/home/4.jpg'
import HeaderHome from './HeaderHome'
import { Fade } from 'react-reveal'

function Home(props) {
    const [home] = useState({
        "templates": [
          {
            "id": 1,
            "img": `${img1}`,
            "title": 'Juntos Siempre'
          },
          {
            "id": 2,
            "img": `${img2}`,
            "title": 'Amistad'
          },
          {
            "id": 3,
            "img": `${img3}`,
            "title": 'Nombre'
          },
          // {
          //   "id": 4,
          //   "img": `${img4}`,
          //   "title": 'Juntos Siempre 2'
          // }
        ]
      })

    const getId = (e) => {
      const target = e.target.parentElement.id
      return target
    }

    return (
      <>
      <HeaderHome />
        <div className="home" >
        <Fade >
        {home.templates.map((item) => {
            return (
              <Link to='/app' >
                <div className="home-grid"  onClick={getId} id={item.id}>
                  <img src={item.img} alt=""/>
                  <h1>{item.title}</h1>
                 </div>
               </Link>
            )
        })}
        </Fade>
        </div>
        </>
    )
}

export default Home
