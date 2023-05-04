import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";
import About from "./components/navigation/About";
import Home from "./components/navigation/Home";
import Projects from "./components/navigation/Projects";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
