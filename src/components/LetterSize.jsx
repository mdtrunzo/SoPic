import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function LetterSize() {
        return (
            <Slide left duration={200}>
            <div className='letter-size'>
                <FontAwesomeIcon icon={faCaretLeft} />
                <p>12</p>
                <FontAwesomeIcon icon={faCaretRight} />
            </div>
            </Slide>
        )    
    }

export default LetterSize;