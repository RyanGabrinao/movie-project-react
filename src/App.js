import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
  const location = useLocation();
  // Custom CSS Height Fix for mobile devices
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div className="wrapper">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home sort="popular" layoutId="poster" />} />
          <Route path="/sort/popular" element={<Home sort="popular" />} />
          <Route path="/sort/top-rated" element={<Home sort="top_rated" />} />
          <Route
            path="/sort/now-playing"
            element={<Home sort="now_playing" />}
          />
          <Route path="/sort/upcoming" element={<Home sort="upcoming" />} />
          <Route path="/movie/:id" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Fave />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
