import React, {useState} from 'react'
import Projects from './Projects';
import Buttons from './Buttons';

function WelcomeHuman() {

  const [returnedTwo, setReturnedTwo] = useState(false);

  const NextTwo = () => {
      setReturnedTwo(true)

    return  <Projects />
  }

  return (
    <div>
      {
        returnedTwo
        ?
        <NextTwo />
        :
        (<div className='pages'>
          <button className='buttons' onClick={NextTwo} id='next'>Next</button>
          <Buttons />
          HELLO!!!
        </div>)
      }
    </div>
  )
}

export default WelcomeHuman