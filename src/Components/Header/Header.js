import {useState} from 'react'
import './header.css'

function Header(){
    const [increment, setIncrement] = useState(0)

    function incrementFun(){
        setIncrement(increment+1);
    }

    function decrementFun(){
        increment > 0 ? setIncrement(increment-1) : setIncrement(0) ;
    }

    return(
        <header>
            <div className='headerTxt'>
                Hey hello I am Bikal SiwaKoti from Icodify
            <p><button onClick={incrementFun}>Click +</button> </p>
            <p>{increment}</p>
            <p><button onClick={decrementFun}>Click -</button> </p>
            </div>
        </header>
    )
}

export default Header;