import {images} from './images'
function App() {

  const test = images.map(element =>{
    console.log(element.url)
    return(
      <img key={element.name} src={element.url} width='200px' height='200px'></img>
    )
});

  console.log(images);
  return (
   <>
    {test}
   </>
  );
}

export default App;
