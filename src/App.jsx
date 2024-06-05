import { Fragment } from "react"
import { useState } from "react"

function App() {

  const [firstname, setFirstname] = useState('John Doe')

  const handleChange = (e) => {
    setFirstname(e.target.value)
  }

  const reset = () => {
    setFirstname('')
  }

  return <Fragment>
    <input type="text" name="firstname" value={firstname} onChange={handleChange}/>  
    <button onClick={reset} type="button">Reset</button>
  </Fragment>
}

export default App
