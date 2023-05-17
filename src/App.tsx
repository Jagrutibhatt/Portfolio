import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/navigation/Home";
import Projects from "./components/navigation/Projects";

function App() {
  return (
    <div className="bg-gray-200 ">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Projects />
    </div>
  );
}

export default App;
