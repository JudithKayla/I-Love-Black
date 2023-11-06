import Divider from "./components/divider/Divider";
import NavBar from "./components/navbar/Navabar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Divider text="Product Portfolio"/>
    </>
  );
}

export default App;
