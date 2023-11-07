import Divider from "./components/divider/Divider";
import NavBar from "./components/navbar/Navabar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Divider text="Product Portfolio" />
      <PortfolioPage />
      <Divider text="Contact Me" />
    </>
  );
}

export default App;
