import Slide from 'react-reveal/Slide';

function RotateBar() {
        return (
            <Slide left duration={200}>
            <div>
              <input type="range" className='range'></input>            
            </div>
            </Slide>
        )
}

export default RotateBar;