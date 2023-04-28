import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>



function App() {
  
  return(
    <>
      <NavBar/>
      <h1 className="d-flex justify-content-center">Perfumeria D'or</h1>
      <ItemListContainer greeting={"Lista de perfumes:"}/>
      


    </>
  )
};

export default App;
