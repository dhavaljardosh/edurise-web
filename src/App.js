import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Contact from "./components/Contact";
import About from "./components/About";

let routes = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/social" element={<Social />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/about" element={<About />} />
      <Route path="*" element={<h1>Oops...</h1>} />
    </Routes>
  </Router>
);

function App() {
  return <div className="App">{routes}</div>;
}

export default App;
