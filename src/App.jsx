import { Fragment, useState } from "react"
import PropTypes from "prop-types";

function App() {

  const [checked, setChecked] = useState(false)

  return<form>
    <CGUCheckbox checked={checked} onCheck={setChecked}/>
    <button disabled={!checked}>Envoyer le formulaire</button>
  </form>
}

function CGUCheckbox({checked, onCheck}){
  return <Fragment>
    <label>
      <input 
        type="checkbox" 
        onChange={(e)=> onCheck(e.target.checked)}
        checked={checked} 
      />
      Accepter les conditions d&apos;utilisation
    </label>
    </Fragment>
}

CGUCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}

export default App
