import { Routes, Route } from "react-router-dom";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Fave from "./pages/Fave";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Fave />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
