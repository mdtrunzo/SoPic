import Slide from 'react-reveal/Slide';

function ColorSelect(){
        return (
            <>
            <Slide left duration={200}>
            <div className="color-select">
                <input type="color" value="#775AFF"></input>
            </div>
            </Slide>
            </>
        )
    
    }

export default ColorSelect;