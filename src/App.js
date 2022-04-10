import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
