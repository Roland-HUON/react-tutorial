import { Fragment } from "react"
import { useState } from "react"

function App() {
  const [Person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 18
  })
  const [count, setCount] = useState(0)
  // console.log('render')
  const incrementAge = () =>{
    setPerson({...Person, age: Person.age + 1})
  }
  const incrementCount = () =>{
    setCount(count + 1)
  }
  return <Fragment>
    <p>Age de {Person.firstName} : {Person.age}</p>
    <button onClick={incrementAge}>Gagner une année</button>
    <button onClick={incrementCount}>Incrémenter : {count}</button>
    </Fragment>
}

export default App
