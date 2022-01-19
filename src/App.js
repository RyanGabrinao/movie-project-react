import { Routes, Route } from "react-router-dom";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Fave from "./pages/Fave";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";

function App() {
  // Custom CSS Height Fix for mobile devicesa
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home sort="popular" />} />
        <Route path="/sort/popular" element={<Home sort="popular" />} />
        <Route path="/sort/top-rated" element={<Home sort="top_rated" />} />
        <Route path="/sort/now-playing" element={<Home sort="now_playing" />} />
        <Route path="/sort/upcoming" element={<Home sort="upcoming" />} />
        <Route path="/movie/:id" element={<Single />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Fave />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
