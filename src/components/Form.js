import React, {useState} from 'react'
import WelcomeHuman from './WelcomeHuman';

function Form() {
const [form, setForm] = useState(false);
const [result, setResult] = useState('');

const Quest = () =>{
    if(result == 4) {
        setForm(true)

        return <WelcomeHuman />
    } else {
        alert('You...')
    }
}

  return (
    <div id='form'>
      {form
       ?
    <Quest /> 
       :
    <div id='formQuest'>
        <p id='quest'>Can you solve this difficult mathematical operation?
            <br></br>
            <b>√16 = ?</b>
        </p>
        <input type='number' id='result' value={result} onChange={e => setResult(e.target.value)} />
        <br></br>
        <button id='submit' onClick={Quest} className='buttons'>Send</button>
    </div>
    }
    </div>
  )
}

export default Form