import { useState } from "react"

function App() {
  const [value, setValue] = useState("")
  const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const toggleChecked = () =>{
    setChecked(!checked)
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(new FormData(e.target))
  // }

  return <form
  //  onSubmit={handleSubmit}
   >
    {/* <input type="text" name="firstname" /> */}
    <input type="text" value={value} onChange={handleChange} />
    <input type="checkbox" checked={checked} onChange={toggleChecked} />
    <button disabled={!checked}>Envoyer</button>
  </form>
}

export default App
