import React, {useState} from 'react'
import Form from './Form';

function Presentation() {

  const [returned, setReturned] = useState(false);

  const Next = () => {
      setReturned(true)

    return  <Form />
  }


  return (
    <div>
      {
        returned
        ?
        <Next />
        :
        (<div id='presentation'>
          <button className='buttons' onClick={Next} id='next'>Get on the spaceship</button>
          <h1 id='prest'>Hello human</h1>
        </div>)
      }
    </div>
  )
}

export default Presentation