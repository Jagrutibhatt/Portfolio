import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import About from "./components/navigation/Contact";
import Home from "./components/navigation/Home";
import Projects from "./components/navigation/Projects";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Projects />
    </>
  );
}

export default App;
