import "./assets/style.css";
import Card from "./components/Card";
import FilterTab from "./components/FilterTab";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <FilterTab/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
