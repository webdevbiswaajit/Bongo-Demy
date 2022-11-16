import "./App.css";
import Header from "./common/Header";
import Menu from "./common/Menu";
import Achievements from "./Components/Home/Achievements";
import Hero from "./Components/Home/Hero";
import SchoolSlide from "./Components/Home/SchoolSlide";
import Service from "./Components/Home/Service";
import ShortTour from "./Components/Home/ShortTour";
import Gap from "./pages/Gap";
function App() {
  return (
    <>
      <Header />
      <Menu />
      <Hero />
      <ShortTour />
      <Service />
      <SchoolSlide />
      <Achievements />
      <Gap />
    </>
  );
}

export default App;
