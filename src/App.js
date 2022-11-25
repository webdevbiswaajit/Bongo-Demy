import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Training from "./pages/Training";
import Product from "./pages/Product";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import ContactUs from "./pages/ContactUs";
import Authenticaton from "./pages/Authenticaton";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="training" element={<Training />} />
        <Route path="product" element={<Product />} />
        <Route path="company" element={<Company />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="Authenticaton" element={<Authenticaton />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
