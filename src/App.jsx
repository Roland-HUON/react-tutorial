import { Fragment } from "react"

const title = '<strong>bonjour</strong>'
const style ={color: 'red', backgroundColor: 'blue'}
const showtitle = true


function App() {

  const handleClick = (e) =>{
    console.log(e);
    alert ("j'ai cliqué sur le h1");
  }

  return <Fragment>
    {showtitle &&<h1 onClick={handleClick} id="title" className="title" dangerouslySetInnerHTML={{__html:title}} style={style}></h1>}
    <input type="text" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corporis molestiae obcaecati! Iste, quibusdam suscipit similique officiis odio sint minus id architecto veniam eaque illum voluptate dolorum molestiae placeat. Provident!
    Neque maiores facilis cumque minus rerum harum at fugiat. Obcaecati, consectetur delectus! Tempore animi expedita exercitationem tenetur est dolorum quam asperiores molestiae blanditiis, iusto, incidunt voluptates accusantium sapiente quisquam quasi.
    Illo a iusto provident dolores, aliquid debitis, fugiat itaque esse unde maxime eaque saepe quisquam dicta odio? Cumque laudantium voluptatibus vitae architecto, laborum possimus obcaecati, illum aut beatae sed facere.
    Mollitia sit autem distinctio, iusto omnis, quae aut atque quas quasi accusantium illum tenetur esse alias necessitatibus porro sed nobis ab culpa iste nemo. Doloremque quod fugit error sunt atque?
    Atque sunt dolore amet voluptates sit quam veritatis iure et perspiciatis rem sequi cumque quos ipsam cum, non consequatur itaque harum mollitia obcaecati delectus est ullam. Quasi officiis ut doloribus?</p>
  </Fragment>
}

export default App
