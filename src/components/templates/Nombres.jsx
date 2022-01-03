import {useState} from 'react'

function Nombres() {
    const [nombres] = useState({
        "template": [
          {
            "id": 1,
            "backgroundImg": "'https://c8.alamy.com/compes/cp3w5j/retrato-de-familia-al-aire-libre-en-otono-cp3w5j.jpg'",
            "upperCase": 'M',
            "nombre": 'Mateo',
            "origen": 'Origen Hebreo, significa Regalo de Dios',
            "texto": 'Listo, enérgico y muy cariñoso. Tan alegre y feliz que contagia a todas las personas a su alrededor.'
          }
        ]
      })
    
    return (
        <>
        {nombres.template.map((item) => {
            return   (
                <div className="nombres-template" style={{backgroundImage: `url(${item.backgroundImg})`}}>
                    <div className="bloque-texto">
                       <h1>{item.upperCase}</h1>
                       <h2>{item.nombre}</h2>
                       <span>{item.origen}</span>
                       <p>{item.texto}</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Nombres







