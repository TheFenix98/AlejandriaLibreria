import NavbarComponent from "./components/Navbar/NavbarComponent"
import GreetingComponent from "./components/ItemListContainerComponent/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';



const App= () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <GreetingComponent greeting={"Hola Mundo"} ></GreetingComponent>
    </>
  )
  
}
  

export default App
