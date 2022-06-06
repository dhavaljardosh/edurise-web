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
      <Route exact path="/edurise-web/" element={<Landing />} />
      <Route exact path="/edurise-web/projects" element={<Projects />} />
      <Route exact path="/edurise-web/social" element={<Social />} />
      <Route exact path="/edurise-web/contact" element={<Contact />} />
      <Route exact path="/edurise-web/about" element={<About />} />
      <Route path="*" element={<h1>Oops...</h1>} />
    </Routes>
  </Router>
);

function App() {
  return <div className="App">{routes}</div>;
}

export default App;
