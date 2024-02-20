import { Route, Routes, Link } from "react-router-dom";
import Home from "./Component-Pages/Home";
import About from "./Component-Pages/About";
import Gallery from "./Component-Pages/Gallery";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>All About Dogs 🐾</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <footer>© Dogs Inc. 2024.</footer>
    </div>
  );
}
