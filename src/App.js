import "./App.css";
import Header from "./common/Header";
import Menu from "./common/Menu";
import Hero from "./Components/Home/Hero";
import Service from "./Components/Home/Service";
import ShortTour from "./Components/Home/ShortTour";
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Hero />
      <ShortTour />
      <Service />
    </>
  );
}

export default App;
